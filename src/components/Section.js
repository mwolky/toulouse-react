import React from 'react';
import {StyleSheet,css} from 'aphrodite';

const Section = (props) => {
    return (
        <div className={css(styles.container)}>
            {props.children}
        </div>
    );
};

const styles = StyleSheet.create({
   container: {
       padding: '40px 0',
       '@media (min-width: 768px)': {
           padding: '80px 0'
       }
   }
});

export default Section;