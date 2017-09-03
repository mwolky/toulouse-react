import React from 'react';
import Footer from './Footer';
import Trip from './Trip';

const TripPage = ({ match}) => {
    return (
        <div>
            <Trip slug={ match.params.slug }/>
            <Footer hideNav/>
        </div>
    );
};

export default TripPage;