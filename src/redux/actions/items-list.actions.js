import {LIST_STATES as LIST_S} from '../constants';

export function selectAction(dispatch){
  return {
    actions: {
      select: obj=>{
        dispatch({type: LIST_S.LIST_SELECT, payload: obj});
      },
      clear: ()=>{
        dispatch({type: LIST_S.LIST_CLEAR});
      }
    }
  }
};