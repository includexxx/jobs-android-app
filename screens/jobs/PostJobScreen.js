import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, Alert, Button, TextInput } from 'react-native';

const PostJobScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>Title</Text>
                <TextInput style={styles.input}
                    onChangeText={text => console.log('dhh')}

                />
                <Text style={styles.text}>Description</Text>
                <TextInput style={[styles.input, styles.multiLine]}
                    multiline={true} fgfdgsf
                    onChangeText={text => console.log('dhh')}

                />
                <Text style={styles.text}>Phone No</Text>
                <TextInput style={styles.input}
                    onChangeText={text => console.log('dhh')}

                />
                <View style={{ margin: 10, }}>
                    <Button
                        title="Submit"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PostJobScreen;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        margin: 10
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        fontWeight: 'bold',
        fontSize: 20

    },
    multiLine: {
        height: 200,
        textAlignVertical: "top",
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    }
});
