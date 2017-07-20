import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet,css} from 'aphrodite';
import m from '../styles/media';
import Logo from './Logo';
import {Link,Element,Events,scroll,scrollSpy}  from 'react-scroll';

class Navigation extends Component {
    constructor(){
        super();
        this.state = {
            menuOpened: false
        };
        this.handleButton = this.handleButton.bind(this);
        this.handleLink = this.handleLink.bind(this);
    }
    componentDidMount(){
        const home = this.home;
        const about = this.about;
        const tours = this.tours;
        const contact = this.contact;
        const underline = this.underline;
    }
    handleSetActive(){
        // console.log('test')
    }
    handleButton(){
        this.setState({
            menuOpened: !this.state.menuOpened
        });
    }
    handleLink(){
        this.setState({
            menuOpened: !this.state.menuOpened
        });
    }
    render(){
        const color = this.props.scrolled ? s.colorScrolled : s.color;
        const bar = this.props.scrolled ? s.barScrolled : null;
        const menu = this.state.menuOpened ? s.menuOpened: null;
        return (
            <div className={css(s.container,color)}>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <div className={css(s.navbar)}>
                                <div className={css(s.brand)}>
                                    <Logo scrolled={this.props.scrolled}/>
                                </div>
                                <div className={css(s.button)} onClick={this.handleButton}>
                                    <div className={css(s.bars)}>
                                        <span className={css(s.bar,bar)}></span>
                                        <span className={css(s.bar,bar)}></span>
                                        <span className={css(s.bar,bar)}></span>
                                    </div>
                                </div>
                                <div className={css(s.menu, menu)}>
                                    <div className={css(s.list)}>
                                        <div className={css(s.items)}>
                                            <Link className={css(s.link)} onClick={this.handleLink} activeClass={css(s.linkActive)} delay={0} to="home" spy={true} smooth={'easeInOutCubic'} offset={-50} duration={500}>
                                                Home
                                            </Link>
                                            <Link className={css(s.link)} onClick={this.handleLink} activeClass={css(s.linkActive)} delay={0} to="about" spy={true} smooth={'easeInOutCubic'} offset={-50} duration={500}>
                                                About
                                            </Link>
                                            <Link className={css(s.link)} onClick={this.handleLink} activeClass={css(s.linkActive)} delay={0} to="tours" spy={true} smooth={'easeInOutCubic'} offset={-50} duration={500}>
                                                Tours
                                            </Link>
                                            <Link className={css(s.link)} onClick={this.handleLink} activeClass={css(s.linkActive)} delay={0} to="contact" spy={true} smooth={'easeInOutCubic'} offset={-50} duration={500}>
                                                Contact
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

const s = StyleSheet.create({
    bar: {
        backgroundColor: 'rgb(37,37,37)',
        display: 'block',
        height: 3,
        marginTop: 5,
        padding: 0,
        transition: 'all .3s',
        width: '100%',
        [m.tablet]: {
            backgroundColor: 'rgb(255,255,255)',
        }
    },
    barScrolled: {
        backgroundColor: 'rgb(37,37,37)'
    },
    bars: {
        boxSizing: 'border-box',
        cursor: 'pointer',
        height: 30,
        width: 30
    },
    brand: {
        flexGrow: 0,
        flexShrink: 0
    },
    button: {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        flexGrow: 1,
        flexShrink: 1,
        fontSize: 0,
        padding: 0,
        [m.tablet]: {
            display: 'none'
        }
    },
    color: {
        backgroundColor: 'rgba(255,255,255,1)',
        color: 'rgb(37,37,37)',
        [m.tablet]: {
            backgroundColor: 'rgba(255,255,255,0)',
            color: 'rgb(255,255,255)'
        }
    },
    colorScrolled: {
        backgroundColor: 'rgba(255,255,255,1)',
        color: 'rgb(37,37,37)',
    },
    container: {
        left: 0,
        position: 'fixed',
        right: 0,
        zIndex: 10,
        [m.tablet]: {
            transition: 'color .3s, background-color .5s',
        }
    },
    item: {
        borderTop: '1px solid rgba(241,241,241,.05)',
        boxSizing: 'border-box',
        padding: 0,
        textAlign: 'center',
        ':hover, :active': {
            background: 'rgba(241,241,241,.05)',
            [m.tablet]: {
                background: 'none'
            }
        },
        [m.tablet]: {
            border: 'none',
            padding: '5px 15px',
            textAlign: 'inherit'
        }
    },
    items: {
        backgroundColor: 'rgb(255,255,255)',
        position: 'relative',
        textAlign: 'center',
        [m.tablet]: {
            backgroundColor: 'transparent',
            display: 'flex',
        }
    },
    link: {
        borderTop: '1px solid rgba(0,0,0,.03)',
        color: 'inherit',
        display: 'block',
        fontSize: 14,
        fontWeight: 700,
        outline: 'none',
        padding: '10px 0',
        position: 'relative',
        ':link, :visited, :hover, :active': {
            textDecoration: 'none'
        },
        [m.tablet]: {
            padding: '5px 15px'
        }
    },
    linkActive: {},
    list: {
        display: 'block',
        [m.tablet]: {
            background: 'none',
            display: 'flex',
            justifyContent: 'flex-end',
            left: 'inherit',
            position: 'inherit',
            width: 'auto'
        }
    },
    menu: {
        display: 'block',
        flexBasis: '100%',
        flexGrow: 1,
        flexShrink: 0,
        margin: '0 -15px',
        maxHeight: 0,
        overflow: 'hidden',
        position: 'relative',
        transition: 'max-height .5s',
        [m.tablet]:{
            flexBasis: 'auto',
            margin: 0,
            maxHeight: 'none'
        }
    },
    menuOpened: {
        maxHeight: 400,
    },
    navbar: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap'
    },

});

export default Navigation;

