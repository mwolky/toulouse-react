import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import Navigation from './Navigation';
import PageList from './PageList';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            scrolled: false
        };
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            this.setScrolled();
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
        const arePagesFetched = this.props.pages.length !== 0;
        return (
            <div>
                <Navigation scrolled={this.state.scrolled}/>
                { arePagesFetched && <PageList pages={this.props.pages}/> }
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        pages: state.pages
    }
}

export default connect(mapStateToProps)(Main);

