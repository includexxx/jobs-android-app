import { createStackNavigator } from '@react-navigation/stack';
import React from "react";

import DrawerScreen from './drawer';
import AuthStackScreen from './authStack';

const MainStack = createStackNavigator();

const MainStackScreen = (props) => {
    return (
        <MainStack.Navigator initialRouteName="auth">
            <MainStack.Screen
                name="auth"
                component={AuthStackScreen}
                options={{ header: () => { } }}
            />
            <MainStack.Screen
                name="drawer"
                component={DrawerScreen}
                options={{ header: () => { } }}
            />
        </MainStack.Navigator>
    )
};
export default MainStackScreen;
