import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const Description = (props) => {
    return (
        <div className={css(styles.container)}>
            <p className={css(styles.p)}>
                {props.children}
            </p>
        </div>
    );
};

const styles = StyleSheet.create({
   container: {
       textAlign: 'center'
   },
   p: {
       fontSize: 14,
       margin: 0,
       '@media (min-width: 768px)': {
           fontSize: 16
       }
   }
});

export default Description;
