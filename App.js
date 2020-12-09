import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DrawerScreen from './router/drawer';
import JobStackScreen from './router/jobsStack';
import LoginScreen from './screens/users/LoginScreen';
import SignupScreen from './screens/users/SignupScreen';
import AuthStackScreen from './router/authStack';
import MainStackScreen from './router/mainNavigation';

import { NavigationContainer } from "@react-navigation/native";
import { firebase } from './config';
import { Provider } from 'react-redux';
import store from './store';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions';


export default function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const tryLogin = async () => {

    if (!auth.authenticated) {
      dispatch(isLoggedInUser())
    }
    console.log("try login")
  }

  useEffect(() => {
    tryLogin();
  }, []);

  return (
    <NavigationContainer>
      {/* <DrawerScreen /> */}
      {/* <LoginScreen /> */}
      {/* <AuthStackScreen /> */}
      <MainStackScreen />
    </NavigationContainer>
  );

}
