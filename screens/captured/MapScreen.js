import React, { Component } from 'react'
import { Platform } from 'react-native'
import { MapView } from 'expo'
import { NavButton } from '../../components'

export default class MapScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Fugitive location',
        headerRight: Platform.OS == "ios" ? (
            <NavButton name="ios-close" 
                onPress={()=>navigation.goBack(null)}/>
        ) : null
    });

    render() {
        const { fugitive } = this.props.navigation.state.params
        return (
            <MapView
                style={{flex:1}}
                initialRegion={{
                    latitude: fugitive.capturedLat,
                    longitude: fugitive.capturedLong,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421, 
                }}>
                <MapView.Marker
                    title={fugitive.name}
                    coordinate={{
                        latitude: fugitive.capturedLat, 
                        longitude: fugitive.capturedLong}}
                    >
                </MapView.Marker>
            </MapView>
        )
    }
}