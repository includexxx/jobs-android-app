import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import Communications from 'react-native-communications';

const CardJob = (props) => {
    //console.log("->>>>>>>>>>",props.job);
    return (
        <View>
            <Card>
                <Card.Title style={styles.title}>{props.job.title}</Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10, fontSize: 20, fontFamily:'Arial' }}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                
                <Button
                    onPress={()=> Communications.phonecall(`${props.job.phoneNo}`, true)}
                    icon={<Icon name='phone' color='#ffffff' type='font-awesome'/>}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title=' Call' />
            </Card>
        </View>
    )
}

export default CardJob;

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 25
    }
})
