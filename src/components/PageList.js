import React from 'react';
import {Element}  from 'react-scroll';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import TourPage from '../containers/TourPage';
import TransparentContent from './TransparentContent';

const PageList = ({pages}) => {
    return (
        <div>
            <Element name="home">
                <Home data={ pages.filter(page => page.slug === 'home') }/>
            </Element>
            <Element name="about">
                <About data={ pages.filter(page => page.slug === 'about') }/>
            </Element>
            <Element name="tours">
                <TourPage data={ pages.filter(page => page.slug === 'tours') }/>

            </Element>
            <TransparentContent/>
            <Element name="contact" id="contact">
                <Contact data={ pages.filter(page => page.slug === 'contact') }/>
            </Element>
        </div>
    );
};

export default PageList;