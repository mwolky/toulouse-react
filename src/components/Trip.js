import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {Grid, Row, Col} from 'react-bootstrap';
import Details from './Details';

class Trip extends Component {
    constructor(){
        super();
        this.state = {
            tours: [],
            isFetchedData: false
        }
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData(){
        let dataUrl2 = 'http://toulousecms.dev/wp-json/wp/v2/tours';
        fetch(dataUrl2)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    tours: res,
                    isFetchedData: true
                });
            });
    }
    render(){
        let trips = this.state.tours || null;
        let trip = null;
        let photos = [];
        if(trips){
            trip = trips.filter((el,i)=>{
                return el.slug === this.props.match.params.slug;
            });
        }
        if(trip.length>0){
            if(trip[0].acf.photo1) photos.push(trip[0].acf.photo1.url)
            if(trip[0].acf.photo2) photos.push(trip[0].acf.photo2.url)
            if(trip[0].acf.photo3) photos.push(trip[0].acf.photo3.url)
            if(trip[0].acf.photo4) photos.push(trip[0].acf.photo4.url)
            if(trip[0].acf.photo5) photos.push(trip[0].acf.photo5.url)

        }
        return (
            <div className={css(s.default)}>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            { trip.length>0 &&
                            <Details
                                title={trip[0].title.rendered}
                                desc={trip[0].content.rendered}
                                price={trip[0].acf.price}
                                time={trip[0].acf.time}
                                images={photos}/>
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const s = StyleSheet.create({
    default: {

    }
});

export default Trip;