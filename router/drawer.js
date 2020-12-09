import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';
import React from "react";
import { Icon } from 'react-native-elements';

// stacks
// import AuthStackScreen from './authStack';
import JobStackScreen from './jobsStack';
import postJobStack from './postJobStack';
import userJobStack from './userJobStack';

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
    <Drawer.Navigator initialRouteName="latestJob">
        <Drawer.Screen name="latestJob" component={JobStackScreen} options={{
            drawerIcon: config => <Icon
                name='arrows-alt'
                type='font-awesome'
                color='#517fa4'
            />
        }} />
        <Drawer.Screen name="postJob" component={postJobStack} options={{
            drawerIcon: config => <Icon
                name='pencil'
                type='font-awesome'
                color='#517fa4'
            />
        }} />
        <Drawer.Screen name="userJob" component={userJobStack} options={{
            drawerIcon: config => <Icon
                name='list-alt'
                type='font-awesome'
                color='#517fa4'
            />
        }} />
    </Drawer.Navigator>
);
export default DrawerScreen;