import * as types from './actionTypes';
import tourApi from '../api/tourApi';

export function loadTours() {
    return function(dispatch) {
        return tourApi.getAllTours()
            .then(tours => {
                dispatch(loadToursSuccess(tours))
            })
            .catch(error => {
                throw(error);
            });
    }
}

export function loadToursSuccess(tours) {
    return { type: types.LOAD_TOURS_SUCCESS, tours };
}