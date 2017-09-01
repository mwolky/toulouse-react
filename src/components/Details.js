import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import ImageGallery from 'react-image-gallery';
import {Grid, Row, Col} from 'react-bootstrap';
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
                        <Col xs={12}>
                            <ImageGallery
                                items={photos}
                                slideInterval={2000}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <p dangerouslySetInnerHTML={{__html: this.props.desc}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <p>
                                {this.props.price}
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <p>
                                {this.props.time}
                            </p>
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

export default Details;