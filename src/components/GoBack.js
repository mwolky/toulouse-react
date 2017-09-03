import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux'
import { StyleSheet, css } from 'aphrodite';
import {Grid, Row, Col} from 'react-bootstrap';
import MdArrowBack from 'react-icons/lib/md/arrow-back';

const GoBack = (props) => {
    console.log(props.routing);
    return (
        <div className={css(s.default)} onClick={ props.goBack }>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <p className={css(s.link)}>
                            <MdArrowBack className={css(s.icon)}/> Go back
                        </p>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

const s = StyleSheet.create({
    default: {
        backgroundColor: 'rgb(171, 39, 79)',
        color: 'white',
        padding: '15px 0'
    },
    icon: {
        fontSize: 25,
        marginRight: 10
    },
    link: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'inline-flex',
        fontSize: 20,
        justifyItems: 'flex-begin',
        margin: 0
    }
});

const mapStateToProps = state => ({
    routing: state.routing,
});

const mapDispatchToProps = dispatch => ({
    goBack() {
        dispatch(goBack());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(GoBack);