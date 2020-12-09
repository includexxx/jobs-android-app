import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


import PostJobScreen from '../screens/jobs/PostJobScreen';


const JobStack = createStackNavigator();

const PostJobStackScreen = (props) => (
    <JobStack.Navigator screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#1976d2' },
    }}>
        <JobStack.Screen
            name="postJob"
            component={PostJobScreen}
            options={{
                title: "Post Job",
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
);
export default PostJobStackScreen;
