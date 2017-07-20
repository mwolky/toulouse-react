import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Main from './Main';
import Navigation from './Navigation';
import Tours from './Tours';
import TransparentContent from './TransparentContent';
import {Link,Element,Events,scroll,scrollSpy}  from 'react-scroll';

class App extends Component {
    constructor(){
        super();
        this.state = {
            pages: [],
            isFetchedData: false,
            isFetchingData: false,
            scrolled: false
        };
    }
    componentDidMount(){
        this.fetchData();
        window.addEventListener('scroll',()=>{
            this.setScrolled();
        });
    }
    fetchData(){
        let dataUrl = 'http://toulousecms.dev/wp-json/wp/v2/pages';
        fetch(dataUrl)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pages: res,
                    isFetchedData: true
                });
            });
    }
    isScrolled(){
        return window.pageYOffset > 0;
    }
    setScrolled(){
        if(this.state.scrolled !== this.isScrolled()){
            this.setState({
                scrolled: this.isScrolled()
            });
        }
    }
    render() {
        const homeD = this.state.pages.filter((page, index) => {
            return page.slug === 'home';
        });
        const homeS = <Home data={homeD}/>

        const aboutD = this.state.pages.filter((page, index) => {
            return page.slug === 'about';
        });

        const aboutS = <About data={aboutD}/>;

        const toursD = this.state.pages.filter((page, index) => {
            return page.slug === 'tours';
        });
        const toursS = <Tours data={toursD}/>;

        const contactD = this.state.pages.filter((page, index) => {
            return page.slug === 'contact';
        });
        const contactS = <Contact data={contactD}/>;

        return (
            <div>
                <Navigation scrolled={this.state.scrolled}/>
                <Main>
                    <Element name="home">
                        { this.state.isFetchedData && homeS }
                    </Element>
                    <Element name="about">
                        { this.state.isFetchedData && aboutS }
                    </Element>
                    <Element name="tours">
                        { this.state.isFetchedData && toursS }
                        <TransparentContent/>

                    </Element>
                    <Element name="contact">
                        { this.state.isFetchedData && contactS }
                    </Element>

                </Main>
                <Footer/>
            </div>
        );
    }
}

export default App;

