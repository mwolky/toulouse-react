import * as types from './actionTypes';

export function scrolledTrue() {
    return {
        type: types.PAGE_SCROLLED,
        isPageScrolled: true
    }
}

export function scrolledFalse() {
    return {
        type: types.PAGE_UNSCROLLED,
        isPageScrolled: false
    }
}
