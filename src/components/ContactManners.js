import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const ContactManners = (props) => {
    return (
        <div className={css(styles.container)}>
            {props.children}
        </div>
    );
};

const styles = StyleSheet.create({
   container: {
       display: 'block',
       fontSize: 14,
       padding: '20px 0 0',
       textAlign: 'center',
       '@media (min-width: 768px)': {
           display: 'flex',
           fontSize: 16,
           justifyContent: 'space-around',
           padding: '80px 0 40px'
       }
   }
});

export default ContactManners;