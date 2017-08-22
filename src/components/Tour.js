import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet,css} from 'aphrodite';
import Slider from 'react-slick';

class Tour extends Component {
    render(){
        const sliderSettings = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: 'ease-out',
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1,
            speed: 300

        };

        let photos = [];
        let tour = this.props.tour;
        if(tour){
            if(tour.acf.photo1) photos.push(tour.acf.photo1.url)
            if(tour.acf.photo2) photos.push(tour.acf.photo2.url)
            if(tour.acf.photo3) photos.push(tour.acf.photo3.url)
            if(tour.acf.photo4) photos.push(tour.acf.photo4.url)
            if(tour.acf.photo5) photos.push(tour.acf.photo5.url)
        }

        let slider = <div/>;
        if(photos.length>0){
            slider = photos.map((el,i)=>{
                return (
                    <div style={{backgroundImage: `url("${el}")`}} className={css(s.image)} key={'i'+i}></div>
                );
            });
        }
        const order = this.props.order == 1 ? 0 : 6;
        const align = this.props.order == 1 ? {textAlign: 'right'} : null;
        console.log(order);
        return (
           <div className={css(s.slider)}>
                <Grid>
                    <Row className={css(s.row)}>
                        <Col xs={6} xsPush={order}>
                            <Slider {...sliderSettings}>
                                {slider} 
                            </Slider>
                        </Col>
                        <Col xs={6} xsPull={order} className={css(s.col)}>
                            <h3>{tour.title.rendered}</h3>
                            <div dangerouslySetInnerHTML={{__html: tour.content.rendered}}></div>
                            <div className={css(s.button)}  style={align}>
                                <a href="" className={css(s.link)}>See more ></a>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

const s = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        width: '100%'
    },
    col: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    image: {
        backgroundSize: 'cover',
        height: 400
    },
    link: {
        backgroundColor: 'rgb(171, 39, 79)',
        color: 'white',
        display: 'inline-block',
        margin: '40px 0 0',
        minWidth: 100,
        padding: '10px 20px',
        ':hover': {
            backgroundColor: 'rgba(171, 39, 79, .85)'
        }
    },
    row: {
        display: 'flex'
    },
    slider: {
        padding: '40px 0'
    }
});

export default Tour;