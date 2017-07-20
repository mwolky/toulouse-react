import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet,css} from 'aphrodite';
import m from '../styles/media';
import Description from './Description';
import Heading from './Heading';
import Section from './Section';

const About = (props) => {
    const data = props.data[0];
    const acf = data.acf;
    return (
        <div id="#about">
            <Section>
                <Grid>
                    <Row>
                        <Col xs={12} sm={10} smOffset={1}>
                            <Heading>
                                { data.title.rendered }
                            </Heading>
                            <Description>
                                { acf.description }
                            </Description>
                            <div className={css(s.person)}>
                                <div className={css(s.column, s.columnOne)}>
                                    <div className={css(s.image)} style={{backgroundImage: `url("${acf.photo}")`}}>
                                    </div>
                                </div>
                                <div className={css(s.column)}>
                                    <div className={css(s.columnTwo)}>
                                        <p className={css(s.p)}>
                                            { acf.intro }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Section>
        </div>
    );
};

const s = StyleSheet.create({
    column: {
        padding: '0 15px',
        [m.tablet]: {
            width: '50%'
        }
    },
    columnOne: {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 15px 0',
        [m.tablet]: {
            justifyContent: 'flex-end',
            paddingTop: 0,
            width: '50%'
        }
    },
    columnTwo: {
        margin: 0,
        [m.tablet]: {
            maxWidth: 300,
            textAlign: 'left'
        }
    },
    image: {
        backgroundSize: 'cover',
        maxWidth: '100%',
        height: 200,
        width: 300
    },
    p: {
        fontSize: 14,
        margin: 0,
        [m.tablet]: {
            fontSize: 16
        }
    },
    person: {
        fontSize: 14,
        display: 'flex',
        flexDirection: 'column-reverse',
        overflow: 'auto',
        paddingTop: 20,
        textAlign: 'center',
        [m.tablet]: {
            flexDirection: 'row',
            paddingTop: 40
        }
    }
});

export default About;