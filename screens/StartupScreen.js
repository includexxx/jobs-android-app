import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDx5xMbMJv62klp28x8tFtmfPxXHeomxMQ",
    authDomain: "jobs-dhaka.firebaseapp.com",
    databaseURL: "https://jobs-dhaka.firebaseio.com",
    projectId: "jobs-dhaka",
    storageBucket: "jobs-dhaka.appspot.com",
    messagingSenderId: "899370672212",
    appId: "1:899370672212:web:cd9b22066c5ceec83d4dc1",
    measurementId: "G-G6VGFQ466G"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const StartupScreen = (props) => {
    const tryLogin = async () => {
        try {
            await firebase.auth().onAuthStateChanged(user => {
                if (user != null) {
                    console.log('user is logged in ');
                } else {
                    console.log('use not logged in')
                    props.navigation.navigate('Auth');
                }
            })

        } catch (err) {
            console.log("Errors: ", err);
        }

    }
    useEffect(() => {
        tryLogin();
    }, []);

    return (
        <View>
            <ActivityIndicator />
        </View>
    )
}


export default StartupScreen;
