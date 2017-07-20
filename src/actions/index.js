import { GET_DATA } from '../constants';

export const getData = () => {
    const action = {
        type: GET_DATA,
        data
    }
    console.log('action in getData');
    return action;
}