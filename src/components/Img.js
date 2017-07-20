import React from 'react';

const Img = (props) => {
    return (
        <div>
            <img src={props.source} alt=""/>
        </div>
    );
};

export default Img;