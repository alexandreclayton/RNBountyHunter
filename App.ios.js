import React from 'react'
import { Platform, Image } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FugitivesScreen, CapturedScreen, FugitivesDetailScreen, CapturedDetailScreen } from './screens'
import fugitivesImage from './assets/images/fugitives.png';
import capturedImage from './assets/images/captured.png';

const App = TabNavigator({
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

export default App;