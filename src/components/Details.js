import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import ImageGallery from 'react-image-gallery';
import {Grid, Row, Col} from 'react-bootstrap';
import MdAccessTime from 'react-icons/lib/md/access-time';
import MdCreditCard from 'react-icons/lib/md/credit-card';
import Heading from './Heading';

import 'react-image-gallery/styles/css/image-gallery.css';

class Details extends Component {
    render(){
        let photos = [];
        const images = this.props.images.map((el,i)=>{
            photos.push({
                original: el,
                thumbnail: el
            });
            return null;
        });
        return (
            <div className={css(s.default)}>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Heading>
                                {this.props.title}
                            </Heading>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={8} smOffset={2}>
                            <ImageGallery
                                items={photos}
                                slideInterval={2000}
                            />
                        </Col>
                    </Row>
                    <Row className={css(s.content)}>
                        <Col xs={12} sm={10} smOffset={1}>
                            <p className={css(s.desc)} dangerouslySetInnerHTML={{__html: this.props.desc}}/>
                        </Col>
                    </Row>
                    <Row className={css(s.infos)}>
                        <Col xs={12} sm={5} smOffset={1}>
                            <p className={css(s.info)}>
                                <MdCreditCard className={css(s.icon)}/> {this.props.price}
                            </p>
                        </Col>
                        <Col xs={12} sm={5} >
                            <p className={css(s.info)}>
                                <MdAccessTime className={css(s.icon)}/> {this.props.time}
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

const s = StyleSheet.create({
    content: {
        paddingTop: 40
    },
    default: {
        padding: 40
    },
    desc: {
        fontSize: 20
    },
    icon: {
        color: 'rgb(171, 39, 79)',
        fontSize: 35,
        marginRight: 10
    },
    info: {
        alignItems: 'center',
        display: 'flex',
        fontSize: 20,
        justifyContent: 'center',
        margin: 0,
        textAlign: 'center'
    },
    infos: {
        paddingTop: 40
    }

});

export default Details;