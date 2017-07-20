import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import bgImg from '../img/bg04.jpg';
const TransparentContent = () => {
    return (
        <div className={css(styles.container)}>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        height: 100,
        '@media (min-width: 768px)': {
            height: 200
        }
    }
});

export default TransparentContent;