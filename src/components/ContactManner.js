import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,css} from 'aphrodite';

const ContactManner = (props) => {
    const type = props.type === 'p' ? <p className={css(styles.p)} dangerouslySetInnerHTML={{__html: props.text}}></p> : <a className={css(styles.a)} href={`mailto:${props.text}`}>{props.text}</a>;
    return (
        <div className={css(styles.container)}>
            {props.children}
            {type}
        </div>
    );
};

ContactManner.defaultProps = {
    type: 'p'
}

ContactManner.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(['p','link'])
};

const styles = StyleSheet.create({
   a:{
       color: 'inherit',
       display: 'block',
       margin: '5px 0 0',
       outline: 'none',
       textDecoration: 'none',
   },
   after: {
       ':before':{
           content: '""',
           fontFamily: 'FontAwesome',
           fontSize: 30,
           '@media (min-width: 768px)': {
               fontSize: 40,
           }
       }
   },
   container: {
       marginTop: 10,
       textAlign: 'center',
       '@media (min-width: 768px)': {
           marginTop: 0,
           width: 200
       }
   },

   p: {
        margin: '5px 0 0'
   }
});

export default ContactManner;