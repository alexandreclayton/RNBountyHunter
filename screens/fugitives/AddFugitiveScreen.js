import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Platform } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
import { Button, NavButton } from '../../components'
import Dao from '../../db/Dao'

export default class AddFugitiveScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'New Fugitive',
        headerRight: Platform.OS == "ios" ? (
            <NavButton name="ios-close" 
                onPress={()=>navigation.goBack(null)}/>
        ) : null
    });

    state = {
        name: ''
    }

    addFugitive = async () => {
        try {
            await Dao.addFugitive(this.state.name)
            this.setState({name:''})
            EventRegister.emit('reloadFugitives')
            this.props.navigation.goBack(null)        
        } catch (error) {
            alert(error)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} value={this.state.name}
                        onChangeText={name=>this.setState({name})} 
                        placeholder="Fugitive Name" 
                        autoCapitalize="words"/>
                </View>
                <Button style={styles.button} title="Add" 
                   onPress={this.addFugitive} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: 30,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        height: 50
    },
    input: {
        flex:1
    },
    button: {
        marginTop: 20,
        width: 200
    }
});