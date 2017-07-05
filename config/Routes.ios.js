import React from 'react'
import { Platform, Image } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import {FugitivesScreen, 
        CapturedScreen, 
        FugitivesDetailScreen, 
        CapturedDetailScreen,
        AddFugitiveScreen } from '../screens'
import fugitivesImage from '../assets/images/fugitives.png';
import capturedImage from '../assets/images/captured.png';

const Root = TabNavigator({
    Fugitives: {
        screen: StackNavigator({
            Fugitives: {
                screen:FugitivesScreen,
            },
            FugitivesDetail: {
                screen:FugitivesDetailScreen
            }
        }),
        navigationOptions: {
            tabBarLabel: 'Fugitives',
            tabBarIcon: ({ tintColor }) => (
                <Image style={{width:53, height:25, tintColor}} source={fugitivesImage} />
            )
        }
        
    },
    Captured: {
        screen: StackNavigator({
            Captured: {
                screen: CapturedScreen
            },
            CapturedDetail: {
                screen: CapturedDetailScreen
            }
        }),
        navigationOptions: {
            tabBarLabel: 'Captured',
            tabBarIcon: ({ tintColor }) => (
                <Image style={{width:31, height:28, tintColor}} source={capturedImage} />
            )
        }
    }
});

const Routes = StackNavigator({
    Home: {
        screen: Root
    },
    AddFugitive: {
        screen: StackNavigator({
            Fugitive: {
                screen: AddFugitiveScreen
            }
        })
    }
}, {
    mode: 'modal',
    headerMode: 'none'
})

export default Routes;