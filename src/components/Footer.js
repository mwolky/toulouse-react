import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet,css} from 'aphrodite';
import { Link } from 'react-scroll';
import m from '../styles/media';
import Logo from './Logo';

const Footer = (props) => {
    return (
        <div className={css(s.container)}>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <div className={css(s.footer)}>
                            <div className={css(s.info)}>
                                <div className={css(s.logo)}>
                                    <Logo white/>
                                </div>
                                <div className={css(s.about)}>
                                    <p className={css(s.p)}>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis cumque distinctio doloremque doloribus ea eius, fuga fugit hic magni nemo neque non optio quia tempora tenetur vel voluptate?</span>
                                    </p>
                                </div>
                            </div>
                            { !props.hideNav &&
                            <div className={css(s.nav)}>
                                <div className={css(s.menu)}>
                                    <Link className={css(s.item)}
                                          delay={0} to="home"
                                          spy={true}
                                          smooth={'easeInOutCubic'}
                                          offset={-55}
                                          duration={500}>
                                        Home
                                    </Link>
                                    <Link className={css(s.item)}
                                          delay={0} to="about"
                                          spy={true}
                                          smooth={'easeInOutCubic'}
                                          offset={0}
                                          duration={500}>
                                        About
                                    </Link>
                                    <Link className={css(s.item)}
                                          delay={0} to="tours"
                                          spy={true}
                                          smooth={'easeInOutCubic'}
                                          offset={-55}
                                          duration={500}>
                                        Tours
                                    </Link>
                                    <Link className={css(s.item)}
                                          delay={0} to="contact"
                                          spy={true}
                                          smooth={'easeInOutCubic'}
                                          offset={-150}
                                          duration={500}>
                                        Contact
                                    </Link>
                                </div>
                            </div>
                            }
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

const s = StyleSheet.create({
    about: {
        display: 'inline-flex',
        flexGrow: 0,
        flexShrink: 0
    },
    container: {
        backgroundColor: 'rgb(171,39,79)',
        color: 'rgb(255,255,255)',
        padding: '15px 0',
        [m.tablet]: {
            padding: '30px 0'
        }
    },
    footer: {
        alignItems: 'flex-end',
        display: 'flex',
        justifyContent: 'space-between'
    },
    info: {
        display: 'flex',
        flexDirection: 'column'
    },
    item: {
        color: 'inherit',
        display: 'block',
        outline: 'none',
        ':link, :visited, :hover, :active': {
            textDecoration: 'none'
        },
        ':hover': {
            textDecoration: 'underline'
        }
    },
    logo: {

    },
    menu: {

    },
    nav: {
        display: 'none',
        [m.tablet]: {
            display: 'block'
        }
    },
    p: {
        fontSize: 10,
        margin: 0,
        [m.tablet]: {
            fontSize: 12,
            maxWidth: 500,
        }
    }
});

export default Footer;