import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Platform } from 'react-native'
import { ImagePicker, Constants, Permissions, Location } from 'expo';
import { EventRegister } from 'react-native-event-listeners'
import { Button } from '../../components'
import Dao from '../../db/Dao'
import burglarImage from '../../assets/images/burglar.png'

export default class FugitivesDetailScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.fugitive.name
    });

    state = {
        photo: undefined
    }

    getLocation = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION)
        if (status !== 'granted') {
            throw Error('Permission to access location was denied')
        }
        const location = await Location.getCurrentPositionAsync({})
        return location.coords
    }

    addFoto = async () => {
        try {
            let result;
            if ( Constants.isDevice ||  Platform.OS == 'android') {
                result = await ImagePicker.launchCameraAsync()
            } else {
                result = await ImagePicker.launchImageLibraryAsync()
            }
             
            if (!result.cancelled) {
                const { fugitive } = this.props.navigation.state.params
                await Dao.addFugitivePhoto(fugitive.id, result.uri)
                this.setState({photo: result.uri})
                EventRegister.emit('reloadFugitives')
            }
        } catch (error) {
            alert(error)
        }
    }

    removeFugitive = async () => {
        try {
            const { fugitive } = this.props.navigation.state.params
            await Dao.removeFugitive(fugitive.id)
            EventRegister.emit('reloadFugitives')
            this.props.navigation.goBack()
        } catch (error) {
            alert(error)
        }
    }

    captureFugitive = async () => {
        try {
            const { fugitive } = this.props.navigation.state.params
            const coords = await this.getLocation()
            await Dao.captureFugitive(fugitive.id, coords.latitude, coords.longitude)
            EventRegister.emit('reloadFugitives')
            EventRegister.emit('reloadCaptured')
            this.props.navigation.goBack()
        } catch (error) {
            alert(error)
        }        
    }

    render() {
        const { photo } = this.state
        const { fugitive } = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Still At Large</Text>
                <Image resizeMode="contain"
                    source={!fugitive.photo && !this.state.photo ? burglarImage : {uri: fugitive.photo || this.state.photo}} style={styles.photo}/>
                <Button style={styles.button} title="Add Photo" onPress={this.addFoto}/>
                <Button style={styles.button} title="Capture" onPress={this.captureFugitive} />
                <Button style={styles.button} title="Delete" onPress={this.removeFugitive} />
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
        marginTop: 20,
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
