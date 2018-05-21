import { combineReducers } from 'redux';

import {setListDataRed, setPutState} from "./data.reducer";
import {selectedItemsRed} from "./items-list.reducer";

const rootReducer = combineReducers({
  setListDataRed,
  setPutState,
  selectedItemsRed
});
export default rootReducer;