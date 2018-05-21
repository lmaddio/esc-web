import { takeLatest, put, call } from 'redux-saga/effects';
import { 
  DATA_REQUEST_STATE as DRS, 
  SEND_DATA as SD,
  LIST_STATES 
} from './constants';

const REQ_API = 'http://www.mocky.io/v2/5b0054dc3100009f0076df29';
const PUT_API = 'https://www.mocky.io/v2/5a42648f300000201b709dfd';

export function* watcherListSaga() {
  yield takeLatest(DRS.DATA_REQUESTING, requestListData);
}

// Get json and pass data to store
function* requestListData(action) {
    try {
        const response = yield call(()=>fetch(REQ_API));
        const data = yield call(()=>response.json());
        yield put({ type: DRS.DATA_SUCCESS, payload: {data}});
    } 
    catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: DRS.DATA_ERROR, payload: {error} });
    }
}

export function* watcherListActionsSaga() {
  yield takeLatest(SD.PUT_REQUESTING, putNewStatus);
}
// Get the coords for the system
function* putNewStatus(action) {
    try {
        const response = yield call(()=>
            fetch(PUT_API, {
              method: 'PUT',
              body: JSON.stringify(action.data),
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            })
        );
        const data = yield call(()=>response.json());
        yield [
          put({ type: LIST_STATES.LIST_CLEAR}),
          put({ type: SD.PUT_SUCCESS, payload: {data}})
        ]
    }
    catch(error) {
        // dispatch a failure action to the store with the error
        yield [
          put({ type: LIST_STATES.LIST_CLEAR}),
          put({ type: SD.PUT_ERROR, payload: {error} })
        ]
    }
}