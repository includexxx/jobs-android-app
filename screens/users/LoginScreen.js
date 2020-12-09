import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Input, Button, Icon } from 'react-native-elements';


const LoginScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#fff', fontSize: 30 }}>Welcome</Text>
            </View>
            <View style={styles.footer}>
                <Input
                    placeholder="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={value => this.setState({ comment: value })}
                />
                <Input
                    placeholder="Password"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={value => this.setState({ comment: value })}
                />
                <View style={{ marginTop: 20 }}>
                    <Button
                        title="Login"
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button
                        title="Sign Up"
                        type="outline"
                        onPress={() => props.navigation.navigate('SignUp')}
                    />
                </View>

            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 30
    }
});
