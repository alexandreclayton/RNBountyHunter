import React, { Component } from 'react'
import { FlatList, Platform, StyleSheet } from 'react-native'
import { ItemList, NavButton, ItemSeparator } from '../../components'

export default class FugitivesScreen extends Component {
    static navigationOptions = {
        title: 'Fugitives',
        headerRight: (
            <NavButton name={ Platform.OS === "ios" ? "ios-add" : "md-add" } />
        )    
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
                this.props.navigation.navigate('FugitivesDetail', { fugitive: item })
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