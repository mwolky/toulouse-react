import React from 'react';
import Tour from './Tour';

const TourList = ({tours}) => {
    const tourList = tours.map((el,i)=>{
        return <Tour key={i} tour={el} order={i%2}/>
    });
    return (
        <div>
            { tourList }
        </div>
    );
};

export default TourList;
