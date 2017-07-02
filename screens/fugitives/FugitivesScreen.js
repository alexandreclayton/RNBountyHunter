import React, { Component } from 'react'
import { FlatList, TouchableHighlight, Platform, Image } from 'react-native'
import { ItemList, NavButton } from '../../components'
import fugitivesImage from '../../assets/images/fugitives.png';

export default class FugitivesScreen extends Component {
    static navigationOptions = {
        label: 'Fugitives',
        title: 'Fugitives',
        headerRight: (
            <NavButton name={ Platform.OS === "ios" ? "ios-add" : "md-add" } />
        ),
        tabBarIcon: ({ tintColor }) => (
            <Image style={{width:53, height:25, tintColor}} source={fugitivesImage} />
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
        <ItemList title={item.key} />
    )

    render() {
        return (
            <FlatList 
                data={this.state.fugitives}
                renderItem={this.renderItem}
            />
        )
    }
}