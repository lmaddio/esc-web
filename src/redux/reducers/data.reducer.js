import {
  DATA_REQUEST_STATE as DATA_REQ,
  SEND_DATA
} from '../constants';

const INITIAL_STATE = {};

export function setListDataRed(state=INITIAL_STATE, action) {
  const {payload={}, type} = action;
  switch(type) {
    case DATA_REQ.DATA_REQUESTING:
      return {
        checkIn: true
      };
    case DATA_REQ.DATA_SUCCESS:
    case DATA_REQ.DATA_ERROR:
      return {
        ...payload,
        checkIn: false
      };
    default:
      return state;
  }
}

export function setPutState(state=INITIAL_STATE, action) {
  const {payload={}, type} = action;
  switch(type) {
    case SEND_DATA.PUT_REQUESTING:
      return {
        checkIn: true
      };
    case SEND_DATA.PUT_SUCCESS:
    case SEND_DATA.PUT_ERROR:
      return {
        ...payload,
        checkIn: false
      };
    default:
      return state;
  }
}