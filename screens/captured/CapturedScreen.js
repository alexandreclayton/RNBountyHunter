import React, { Component } from 'react'
import { View } from 'react-native'
import { FlatList, Image } from 'react-native'
import ItemList from '../../components/ItemList'
import capturedImage from '../../assets/images/captured.png';

export default class CapturedScreen extends Component {
    static navigationOptions = {
        label: 'Captured',
        title: 'Captured',
        tabBarIcon: ({ tintColor }) => (
            <Image style={{width:31, height:28, tintColor}} source={capturedImage} />
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
