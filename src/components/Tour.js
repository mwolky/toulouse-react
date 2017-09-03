import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import m from '../styles/media';
import 'slick-carousel/slick/slick.css'

class Tour extends Component {
    render(){
        const sliderSettings = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: 'ease-out',
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
        const order = this.props.order === 1 ? 0 : 6;
        const align = this.props.order === 1 ? {textAlign: 'right'} : null;

        return (
           <div className={css(s.slider)}>
                <Grid>
                    <Row className={css(s.row)}>
                        <Col xs={12} sm={6} smPush={order}>
                            <Slider {...sliderSettings}>
                                {slider} 
                            </Slider>
                        </Col>
                        <Col xs={12}  sm={6} smPull={order} className={css(s.col)}>
                            <h3>{tour.title.rendered}</h3>
                            <div dangerouslySetInnerHTML={{__html: tour.content.rendered}}></div>
                            <div className={css(s.button)}  style={align}>
                                <Link to={`/trip/${tour.slug}`} className={css(s.link)}>See more ></Link>
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
        margin: '10px 0 30px',
        minWidth: 100,
        padding: '7px 15px',
        ':hover': {
            backgroundColor: 'rgba(171, 39, 79, .85)'
        },
        [m.tablet]: {
            margin: '40px 0 0',
            padding: '10px 20px',
        }
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    slider: {
        padding: 0,
        [m.tablet]: {
            padding: '40px 0',
        }
    }
});

export default Tour;