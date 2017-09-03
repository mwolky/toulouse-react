import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet,css} from 'aphrodite';
import { connect } from 'react-redux';
import m from '../styles/media';
import Heading from '../components/Heading';
import Section from '../components/Section';
import TourList from '../components/TourList';

class TourPage extends Component {
    render(){
        return (
            <div className={css(s.container)} id="#tours">
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <Section>
                                <div className={css(s.margin)}>
                                    <Heading>
                                        Tours
                                    </Heading>
                                    <TourList tours={this.props.tours} />
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
    },
    margin: {
        marginBottom: -40,
    }
});

const mapStateToProps = state => ({
    tours: state.tours
});

export default connect(mapStateToProps)(TourPage);