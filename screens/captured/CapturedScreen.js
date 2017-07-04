import React, { Component } from 'react'
import { View } from 'react-native'
import { FlatList, StyleSheet } from 'react-native'
import { ItemList, ItemSeparator } from '../../components'

export default class CapturedScreen extends Component {
    static navigationOptions = {
        title: 'Captured'
    }
    
    state ={
        fugitives: [
            {key: 'José Pedro'},
            {key: 'Maria Paula'},
            {key: 'Paulo José'},
            {key: 'João Paulo'}
        ]
    }

    renderItem = ({item}) => (
        <ItemList title={item.key} onPress={() => {
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
