import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet,css} from 'aphrodite';
import m from '../styles/media';
import ArrowDownward from '../img/arrow_bottom.png';

const Home = (props) => {
    const data = props.data[0];
    const acf = data.acf;
    return (
        <div className={css(s.slider, s.height)} style={{backgroundImage: `url("${acf.background}")`}} id="#home">
            <Grid>
                <Row>
                    <Col xs={12}>
                        <div className={css(s.container, s.height)}>
                            <div className={css(s.white, s.intro)}>
                                <h1 className={css(s.reset, s.heading, s.after)}>
                                    {acf.heading}
                                </h1>
                                <p className={css(s.reset, s.subheading)}>
                                    {acf.subheading}
                                </p>
                                <p className={css(s.reset, s.description)}>
                                    {acf.description}
                                </p>
                                <div className={css(s.arrow)}>
                                    <p className={css(s.reset, s.instruction)}>
                                        See more
                                    </p>
                                    <a className={css(s.scroll)} href="#about">
                                        <img src={ArrowDownward} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

const s = StyleSheet.create({
    after: {
        ':after': {
            borderBottom: '5px solid rgb(171,39,79)',
            boxSizing: 'border-box',
            content: '""',
            display: 'block',
            height: 0,
            width: 100
        }
    },
    arrow: {
        alignItems: 'center',
        display: 'none',
        flexDirection: 'column',
        position: 'relative',
        '@media (min-width: 992px)': {
            display: 'inline-flex'
        }
    },
    container: {
        alignItems: 'center',
        display: 'flex',
        padding: '15px 0'
    },
    description: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.1,
        margin: 0,
        paddingBottom: 20,
        '@media (min-width: 768px)': {
            fontSize: 16,
            maxWidth: '75%',
            paddingBottom: 0
        },
        '@media (min-width: 992px)': {
            maxWidth: '50%',
            paddingBottom: 15
        },
        '@media (min-width: 1200px)': {
            paddingBottom: 40
        }
    },
    heading: {
        fontSize: 40,
        lineHeight: 1.2,
        margin: 0,
        paddingBottom: 20,
        position: 'relative',
        '@media (min-width: 768px)': {
            fontSize: 48,
            paddingBottom: 20
        },
        '@media (min-width: 992px)': {
            fontSize: 56
        },
        '@media (min-width: 1200px)': {
            paddingBottom: 40
        }
    },
    height: {
        minHeight: 'calc(100vh - 4px)',
    },
    instruction: {
        display: 'none',
        fontSize: 10,
        paddingBottom: 5,
        [m.laptop]: {
            fontSize: 12,
            paddingBottom: 10
        },
        [m.desktop]: {
            display: 'block'
        }
    },
    intro: {
      width: '100%'
    },
    reset: {
        margin: 0
    },
    slider: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottom: '5px solid rgb(171,39,79)',
        boxSizing: 'border-box'
    },
    scroll: {
        animationIterationCount: 'infinite',
        animationDirection: 'normal',
        animationDuration: '1.5s',
        animationName: {
            '0%': {
                transform: 'translateY(0)'
            },
            '30%': {
                transform: 'translateY(10px)'
            },
            '100%': {
                transform: 'translateY(0)'
            }
        },
        animationTimingFunction: 'ease-in-out',
        display: 'block',
        position: 'relative'
    },
    subheading: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 1.1,
        paddingBottom: 15,
        '@media (min-width: 768px)': {
            maxWidth: '75%',
            fontSize: 24
        },
        '@media (min-width: 992px)': {
            maxWidth: '50%'
        }
    },
    white: {
        color: 'rgb(255, 255, 255)'
    }
});

export default Home;