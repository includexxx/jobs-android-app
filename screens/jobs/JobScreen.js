import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CardJob from '../../shared/component/Card';

const JobScreen = () => {
    const initJobs = [
        { 'title': 'ReactJs Developer', 'description': 'dfasdfadsfa', 'phoneNo': '003948383737' },
        { 'title': 'Python Developer', 'description': 'dfasdfadsfa', 'phoneNo': '003948383737' },
        { 'title': 'Angular Developer', 'description': 'sdfasdfa  frafafasdfa  ertfaedfasdf', 'phoneNo': '003948383737' }
    ]
    const [jobs, setJobs] = useState(initJobs);

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={jobs}
                renderItem={({ item }) => (
                    <CardJob job={item} />
                )}
            />
        </View>
    )
}

export default JobScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
