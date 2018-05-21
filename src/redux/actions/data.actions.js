import {
  DATA_REQUEST_STATE as DATA_REQ,
  SEND_DATA
} from '../constants';

const fetchDataBegin = () => ({
  type: DATA_REQ.DATA_REQUESTING
});

export function requestListData(dispatch){
  return {
    getListData: async ()=>{
      dispatch(fetchDataBegin());
    }
  }
}

const putDataRequest = (data) => ({
  type: SEND_DATA.PUT_REQUESTING,
  data
});

export function sendNewStatus(dispatch) {
  return {
    sendNewStatus: (items, newState)=>{
      const _items = items.map(i=>({...i, status: newState}));
      dispatch(putDataRequest(_items));
    }
  }
} 