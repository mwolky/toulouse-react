import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scrollReducer(state = initialState.pageScrolled, action) {
    switch(action.type) {
        case types.PAGE_SCROLLED:
            return action.scrolled;
        default:
            return state;
    }
}