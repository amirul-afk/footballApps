import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/Profile'

export default [ 
  {
    name: "HomeScreen",
    component: HomePage
  },
  {
    name: "ProfileScreen",
    component: ProfilePage
  }
];
