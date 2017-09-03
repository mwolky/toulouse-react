import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scrollReducer(state = initialState.isPageScrolled, action) {
    switch(action.type) {
        case types.PAGE_SCROLLED:
            return action.isPageScrolled;
        case types.PAGE_UNSCROLLED:
            return action.isPageScrolled;
        default:
            return state;
    }
}