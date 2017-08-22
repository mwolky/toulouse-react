import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet,css} from 'aphrodite';
import Heading from './Heading';
import Section from './Section';
import Tour from './Tour'
import 'slick-carousel/slick/slick.css'

class Tours extends Component {
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
        let dataUrl = 'http://toulousecms.dev/wp-json/wp/v2/tours';
        fetch(dataUrl)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    tours: res,
                    isFetchedData: true
                });
            });
    }
    render(){
        let tours = this.state.tours.map((el,i)=>{
            return <Tour key={i} tour={el} order={i%2}/>
        });
        return (
            <div className={css(s.container)} id="#tours">
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <Section>
                                <div>
                                    <Heading>
                                        Tours
                                    </Heading>
                                    {this.state.tours && tours}
                                </div>
                            </Section>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const s = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(241,241,241)'
    }
});

export default Tours;