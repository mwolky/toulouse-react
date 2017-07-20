import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const Heading = (props) =>  {
    return (
        <div className={css(styles.container, styles.after)}>
            <h2 className={css(styles.h)}>
                {props.children}
            </h2>
        </div>
    );
};

const styles = StyleSheet.create({
    after: {
        ':after': {
            borderBottom: '3px solid rgb(171,39,79)',
            bottom: 0,
            boxSizing: 'content-box',
            content: '""',
            display: 'block',
            height: 0,
            left: 'calc(50% - 25px)',
            position: 'absolute',
            width: 50
        }
    },
    container: {
        fontWeight: 300,
        marginBottom: 30,
        position: 'relative',
        textAlign: 'center'
    },
    h: {
        fontSize: 30,
        fontWeight: 300,
        margin: 0,
        paddingBottom: 5,
        '@media (min-width: 768px)': {
            fontSize: 36
        }
    }
});

export default Heading;
