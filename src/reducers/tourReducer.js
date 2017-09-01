import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tourReducer(state = initialState.tours, action) {
    switch(action.type) {
        case types.LOAD_TOURS_SUCCESS:
            return action.tours;
        default:
            return state;
    }
}
