import { combineReducers } from 'redux';
import tours from './tourReducer';
import pages from './pageReducer';
import scrolled from './scrollReducer';

const reducer = combineReducers({
    tours,
    pages,
    scrolled
});

export default reducer;
