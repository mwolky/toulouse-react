import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import tours from './tourReducer';
import pages from './pageReducer';
import isPageScrolled from './scrollReducer';

const reducer = combineReducers({
    tours,
    pages,
    isPageScrolled,
    routing: routerReducer
});

export default reducer;
