import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import PageList from '../components/PageList';
import { scrolledFalse, scrolledTrue } from '../actions/scrollActions';

class Main extends Component {
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            this.setScrolled();
        });
    }
    isScrolled(){
        return window.pageYOffset > 0;
    }
    setScrolled(){
        if(this.isScrolled()){
            this.props.scrollIn()
        } else {
            this.props.scrollOut()
        }
    }
    render() {
        const arePagesFetched = this.props.pages.length !== 0;
        return (
            <div>
                <Navigation scrolled={this.props.isPageScrolled}/>
                { arePagesFetched && <PageList pages={this.props.pages}/> }
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pages: state.pages,
    isPageScrolled: state.isPageScrolled
});

const mapDispatchToProps = dispatch => ({
    scrollIn() {
        dispatch(scrolledTrue())
    },
    scrollOut() {
        dispatch(scrolledFalse())
    }
});



export default connect(mapStateToProps, mapDispatchToProps)(Main);

