import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet,css} from 'aphrodite';
import { connect } from 'react-redux';
import Heading from './Heading';
import Section from './Section';
import TourList from './TourList';

class TourPage extends Component {
    render(){
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
    }
});

function mapStateToProps(state, ownProps) {
    return {
        tours: state.tours
    };
}

export default connect(mapStateToProps)(TourPage);