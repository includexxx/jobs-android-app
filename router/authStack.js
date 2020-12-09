import { createStackNavigator } from '@react-navigation/stack';
import React from "react";

import LoginScreen from '../screens/users/LoginScreen';
import SignUp from '../screens/users/SignupScreen';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="SignIn"
            component={LoginScreen}
            options={{ header: () => { } }}
        />
        <AuthStack.Screen
            name="SignUp"
            component={SignUp}
            options={{ header: () => { } }}
        />
    </AuthStack.Navigator>
);
export default AuthStackScreen;