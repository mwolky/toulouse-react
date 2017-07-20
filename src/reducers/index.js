import { GET_DATA } from '../constants';

const data = (action) => {
    return {
        data: action.data
    }
};

const datas = (state = [], action) => {
  let datas = null;
  switch(action.type){
      case GET_DATA:
          datas = [...state, data(action)];
          console.log('datas as state', datas);
          return datas;
      default:
          return state;
  }
};

export default datas;
