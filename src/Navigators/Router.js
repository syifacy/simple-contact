import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { colors } from '../Styles/Colors';
import ContactBoard from '../Screen/ContactBoard';
import ContactDetail from '../Screen/ContactDetail';
import ContactAdd from '../Screen/ContactAdd';

const AppNavigator = createStackNavigator({
    Home: {
        screen: ContactBoard
    },
    Detail:{
        screen: ContactDetail
    },
    AddContact: {
        screen: ContactAdd
    }
}, {
    defaultNavigationOptions: {
        title: 'Home',
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.newBlue,
        },
      },
})

export default Router = createAppContainer(AppNavigator);