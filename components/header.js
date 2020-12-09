import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        height: 80
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginTop: 25
    }
})

export default Header;
