import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
import { Button } from '../../components'
import Dao from '../../db/Dao'
import burglarImage from '../../assets/images/burglar.png'

export default class CapturedDetailScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.fugitive.name
    });

    removeFugitive = async () => {
        try {
            const { fugitive } = this.props.navigation.state.params
            await Dao.removeFugitive(fugitive.id)
            EventRegister.emit('reloadCaptured')
            this.props.navigation.goBack()
        } catch (error) {
            alert(error)
        }
    }

    showMap = () => {
        const { fugitive } = this.props.navigation.state.params
        this.props.navigation.navigate('Map', {fugitive})
    }

    render() {
        const { fugitive } = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Busted!</Text>
                <Image resizeMode="contain"
                    source={!fugitive.photo ? burglarImage : {uri: fugitive.photo}} style={styles.photo}/>
                <Button style={styles.button} title="Show On Map" onPress={this.showMap}/>
                <Button style={styles.button} title="Delete" onPress={this.removeFugitive}/>
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
    },
    photo: {
        marginTop: 20,
        width: 320,
        height: 240
    }    

})
