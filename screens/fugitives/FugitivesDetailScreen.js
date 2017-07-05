import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../../components'

export default class FugitivesDetailScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.fugitive.key
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Still At Large</Text>
                <Button style={styles.button} title="Capture" />
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
