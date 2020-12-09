import { createStackNavigator } from '@react-navigation/stack';
import React from "react";


import UserJobScreen from '../screens/jobs/UserJobScreen';


const JobStack = createStackNavigator();

const UserJobStackScreen = () => (
    <JobStack.Navigator>
        <JobStack.Screen
            name="postJob"
            component={UserJobScreen}
            options={{ title: "Job By You" }}
        />
    </JobStack.Navigator>
);
export default UserJobStackScreen;
