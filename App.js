import React, {Component} from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Router from './src/Navigators/Router';
import store from './src/store';
import { colors } from './src/Styles/Colors';

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
  }
}

