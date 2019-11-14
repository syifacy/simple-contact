import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ContactListReducer from './ContactListReducer';

module.exports = combineReducers({
  contactListReducer: ContactListReducer,
  form: formReducer
});