import React from 'react';
import {StyleSheet,css} from 'aphrodite';
import m from '../styles/media'

const Logo = (props) => {
    const afterScrolled = props.scrolled ? s.afterScrolled : null;
    const color = props.scrolled ? s.colorScrolled : s.color;
    const colorWhite = props.white ? s.colorWhite : null;
    const afterWhite = props.white ? s.afterWhite : null;
    return (
        <div>
            <a className={css(s.link,color,colorWhite)} href="#home">
                <div className={css(s.logo)}>
                    <p className={css(s.name)}>
                        <span className={css(s.letter,s.after,afterScrolled,afterWhite,s.afterOne)}>T</span>
                        <span className={css(s.letter,s.after,afterScrolled,afterWhite,s.afterTwo)}>A</span>
                        <span className={css(s.letter,s.after,afterScrolled,afterWhite,s.afterThree)}>K</span>
                        <span className={css(s.letter,s.after,afterScrolled,afterWhite,s.afterFour)}>A</span>
                        <span className={css(s.letter,s.after,afterScrolled,afterWhite,s.afterFive)}>C</span>
                        <span className={css(s.letter,s.after,afterScrolled,afterWhite,s.afterSix)}>H</span>
                        <span className={css(s.letter,s.after,afterScrolled,afterWhite,s.afterSeven)}>E</span>
                    </p>
                </div>
                <div>
                    <p className={css(s.description)}>
                        Private Tours Toulouse
                    </p>
                </div>
            </a>
        </div>
    );
};

Logo.defaultProps = {
  scrolled: false
};

const s = StyleSheet.create({
    after: {
        ':after': {
            borderRight: '1px solid rgb(37,37,37)',
            bottom: 2,
            content: '""',
            display: 'inline-block',
            height: 0,
            margin: '0',
            position: 'absolute',
            right: -1,
            transition: 'all .3s',
            width: 0,
            [m.tablet]: {
                borderRight: '1px solid rgb(255,255,255)'
            }
        }
    },
    afterOne: {
        paddingLeft: 0,
        ':after': {
            height:16
        }
    },
    afterTwo: {
        ':after': {
            height:18
        }
    },
    afterThree: {
        ':after': {
            height:14
        }
    },
    afterFour: {
        ':after': {
            height:22
        }
    },
    afterFive: {
        ':after': {
            height:16
        }
    },
    afterSix: {
        ':after': {
            height:14
        }
    },
    afterSeven: {
        paddingRight: 0,
        ':after': {
            display: 'none'
        }
    },
    afterScrolled: {
        ':after': {
            borderColor: 'rgb(37,37,37)',
            [m.tablet]: {
                borderColor: 'rgb(37,37,37)'
            }
        }
    },
    afterWhite: {
        ':after': {
            borderColor: 'rgb(255,255,255)'
        }
    },
    color: {
        color: 'rgb(37,37,37)',
        [m.tablet]: {
            color: 'rgb(255,255,255)'
        }
    },
    colorScrolled: {
        color: 'rgb(37,37,37)'
    },
    colorWhite: {
        color: 'rgb(255,255,255)'
    },
    description: {
        fontSize: 10,
        fontWeight: 400,
        margin: 0
    },
    letter: {
        display: 'inline-block',
        padding: '0 1px 0 2px',
        position: 'relative'
    },
    link: {
        display: 'inline-block',
        outline: 'none',
        padding: '14px 0 7px',
        ':link, :visited, :hover, :active': {
            textDecoration: 'none'
        }
    },
    logo: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1,
        margin: 0
    }
});

export default Logo;