import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet,css} from 'aphrodite';
import Heading from './Heading';
import Section from './Section';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'

const Tours = (props) => {
    return (
        <div className={css(s.container)} id="#tours">
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <Section>
                            <Heading>
                                Tours
                            </Heading>
                            <Slider>
                                <div><p>t</p></div>
                                <div><p>t</p></div>
                                <div><p>t</p></div>
                                <div><p>t</p></div>
                            </Slider>
                        </Section>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

const s = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(241,241,241)'
    }
});

export default Tours;