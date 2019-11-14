import { takeLatest,takeEvery, all } from 'redux-saga/effects';
import { 
  fetchGetListContactWorker, 
  fetchGetDetailContactWorker, 
  fetchUpdateContactWorker, 
  fetchDeleteContactWorker,
  fetchAddNewContactWorker
} from './FetchContact';


function* watchGetContactList(){
  yield takeEvery('GET_CONTACT_REQUEST', fetchGetListContactWorker);
}
function* watchGetDetailContact(){
  yield takeLatest('GET_DETAIL_CONTACT_REQUEST', fetchGetDetailContactWorker)
}
function* watchUpdateContact(){
  yield takeLatest('UPDATE_CONTACT_REQUEST', fetchUpdateContactWorker)
}
function* watchDeleteContact(){
  yield takeLatest('DELETE_CONTACT_REQUEST', fetchDeleteContactWorker)
}
function* watchAddContact(){
  yield takeLatest('ADD_CONTACT_REQUEST', fetchAddNewContactWorker)
}
export default function* rootSagas() {
  yield all ([
    watchGetContactList(),
    watchGetDetailContact(),
    watchUpdateContact(),
    watchDeleteContact(),
    watchAddContact(),
  ])
   
}