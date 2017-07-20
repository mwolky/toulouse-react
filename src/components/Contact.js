import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ContactManner from './ContactManner';
import ContactManners from './ContactManners';
import Description from './Description';
import Heading from './Heading';
import Section from './Section';
import Location from 'react-icons/lib/md/location-on';
import Mail from 'react-icons/lib/md/mail-outline';
import Phone from 'react-icons/lib/md/local-phone';

const Contact = (props) => {
    const data = props.data[0];
    const acf = data.acf;
    return (
        <div id="#contact">
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
                            <ContactManners>
                                <ContactManner text={acf.phone}>
                                    <Phone size="40"/>
                                </ContactManner>
                                <ContactManner text={acf.company}>
                                    <Location size="40"/>
                                </ContactManner>
                                <ContactManner text={acf.email} type='link'>
                                    <Mail size="40" />
                                </ContactManner>
                            </ContactManners>
                        </Col>
                    </Row>
                </Grid>
            </Section>
        </div>
    );
};

export default Contact