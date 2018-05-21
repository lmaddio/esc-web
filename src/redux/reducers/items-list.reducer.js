import {LIST_STATES as LIST_S} from '../constants';

const INITIAL_STATE = {};

export function selectedItemsRed(state=INITIAL_STATE, action) {
  const {payload={}, type} = action;
  switch(type) {
    case LIST_S.LIST_SELECT:
      let _selecteds = state.selecteds || [];
      if(_selecteds.some(p=>p.id === payload.id))
        _selecteds = _selecteds.filter(p=>p.id !== payload.id)
      else
        _selecteds.push(payload)
      return _selecteds.length > 0 ? {selecteds: _selecteds} : INITIAL_STATE;
    case LIST_S.LIST_CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
}