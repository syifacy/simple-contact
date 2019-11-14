import {call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchContactList, 
  fetchDetailContact,
  fetchUpdateContact, 
  fetchDeleteContact, 
  fetchNewContact
} from '../API/ContactServices';

export function* fetchGetListContactWorker() {
  try {
    const result = yield call(fetchContactList);
    yield put({type: 'GET_CONTACT_SUCCESS', payload:result});
  } catch(error) {
    yield put({type: 'GET_CONTACT_FAILURE', payload: error});
  }
}
export function* fetchGetDetailContactWorker(action) {
  try {
    const result = yield call(fetchDetailContact, action.id);
    yield put({type: 'GET_DETAIL_CONTACT_SUCCESS', payload:result});
  } catch(error) {
    yield put({type: 'GET_DETAIL_CONTACT_FAILURE', payload: error});
  }
}
export function* fetchUpdateContactWorker(action){
  try{
    const result = yield call(fetchUpdateContact, action);
    yield put({type: 'UPDATE_CONTACT_SUCCESS', payload:result});
  }catch(error) {
    yield put({type: 'UPDATE_CONTACT_FAILURE', payload: error});
  }
}
export function* fetchDeleteContactWorker(action){
  try{
    const result = yield call(fetchDeleteContact, action.id);
    yield put({type: 'DELETE_CONTACT_SUCCESS', payload:result});
  }catch(error) {
    yield put({type: 'DELETE_CONTACT_FAILURE', payload: error});
  }
}
export function* fetchAddNewContactWorker(action){
  try{
    const result = yield call(fetchNewContact, action);
    yield put({type: 'ADD_CONTACT_SUCCESS', payload:result});
  }catch(error) {
    yield put({type: 'ADD_CONTACT_FAILURE', payload: error});
  }
}