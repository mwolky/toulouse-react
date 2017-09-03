import React from 'react';
import { connect } from 'react-redux';
import PageList from './PageList';

const LandingPage = () => {
    const arePagesFetched = this.props.pages.length !== 0;
    return (
        <div>
            { arePagesFetched && <PageList pages={this.props.pages}/> }
        </div>
    );
};

const mapStateToProps = state => ({
    pages: state.pages
});

export default connect(mapStateToProps)(LandingPage);