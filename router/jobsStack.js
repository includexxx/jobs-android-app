import { createStackNavigator } from '@react-navigation/stack';
import React from "react";

import StartupScreen from '../screens/StartupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import JobScreen from '../screens/jobs/JobScreen';

//import AuthScreen from '../screens/users/AuthScreen';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const JobStack = createStackNavigator();

const JobStackScreen = (props) => {
    return (
        <JobStack.Navigator screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#1976d2'},
        }}>
            <JobStack.Screen
                name="jobs"
                component={JobScreen}
                options={{
                    title: "Latest Job",
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <View style={{ marginLeft: 10, backgroundColor: '#fff' }}>
                            <Icon
                                name='bars'
                                type='font-awesome'
                                color='#517fa4'
                                onPress={() => props.navigation.openDrawer()}
                            />
                        </View>
                    )
                }}
            />
        </JobStack.Navigator>
    )
};
export default JobStackScreen;
