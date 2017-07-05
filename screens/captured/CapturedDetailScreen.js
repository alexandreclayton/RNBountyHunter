import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../../components'

export default class CapturedDetailScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.fugitive.key
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Busted!</Text>
                <Button style={styles.button} title="Delete" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        marginTop: 40,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 20,
        width: 200
    }

})
