import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Input, Button } from 'react-native-elements';
import { signup } from '../../actions';
import { useDispatch } from 'react-redux';

const SignupScreen = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const dispatch = useDispatch();

    const submit = async() => {
        const user = { name, email, password };
        console.log('submiting....');
        console.log(email);
        dispatch(signup(user));
        console.log("props==>>", props)
        props.navigation.navigate('drawer');
    }

    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ color: '#fff', fontSize: 30 }}>Sign Up</Text>
                </View>
                <View style={styles.footer}>
                    <Input
                        placeholder="Fullname"
                        leftIcon={{ type: 'font-awesome', name: 'user' }}
                        onChangeText={value => setName(value)}
                    />
                    <Input
                        placeholder="Email"
                        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                        onChangeText={value => setEmail(value)}
                    />
                    <Input
                        placeholder="Password"
                        leftIcon={{ type: 'font-awesome', name: 'lock' }}
                        onChangeText={value => setPassword(value)}
                    />
                    <Input
                        placeholder="Confirm Password"
                        leftIcon={{ type: 'font-awesome', name: 'lock' }}
                        onChangeText={value => setConfirmPass(value)}
                    />

                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="Sign Up"
                            onPress={submit}
                        />
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 30
    }
});
