import React, { Component } from 'react'
import { View } from 'react-native'
import { FlatList, StyleSheet } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
import { ItemList, ItemSeparator } from '../../components'
import Dao from '../../db/Dao'

export default class CapturedScreen extends Component {
    static navigationOptions = {
        title: 'Captured'
    }
    
    state ={
        fugitives: []
    }

    componentWillMount() {
        this.listener = EventRegister.addEventListener('reloadCaptured', this.loadCaptured)
    }
    
    componentWillUnmount() {
        EventRegister.removeEventListener(this.listener)
    }
    componentDidMount() {
        this.loadCaptured()
    }    

    loadCaptured = async () => {
        try {
            const fugitives = await Dao.listFugitives(1)
            this.setState({fugitives})

        } catch (error) {
            alert(error)
        }
    }

    renderItem = ({item}) => (
        <ItemList title={item.name} onPress={() => {
                this.props.navigation.navigate('CapturedDetail', { fugitive: item })
            } } />
    )

    render() {
        return (
            <FlatList 
                style={styles.list}
                data={this.state.fugitives}
                renderItem={this.renderItem}
                ItemSeparatorComponent = {ItemSeparator}
                keyExtractor={({id})=>id}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex:1, 
        backgroundColor: 'white'
    }
})
