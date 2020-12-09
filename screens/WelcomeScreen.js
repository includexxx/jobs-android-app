import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';


const WelcomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Welcome</Text>
            <Button title="open Drawer" onPress={() => navigation.openDrawer()} />
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
            <TextInput
                placeholder="dfadsfa"
                maxLength={40}
            />
            <Icon
                name='rowing' />
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({});
