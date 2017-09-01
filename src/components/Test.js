import React, {Component} from 'react';

const Test = ({match}) => {
    return (
        <div>
            <p>test</p>
            {match.params.id && <p>param: {match.params.id}</p>}
        </div>
    );
};

export default Test;