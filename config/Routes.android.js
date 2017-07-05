import { TabNavigator, StackNavigator } from 'react-navigation';
import {FugitivesScreen, 
        CapturedScreen, 
        FugitivesDetailScreen, 
        CapturedDetailScreen,
        AddFugitiveScreen } from '../screens'

const App = StackNavigator({
    Home: {
        screen: TabNavigator({
            Fugitives: {
                screen: FugitivesScreen
            }, 
            Captured: {
                screen: CapturedScreen
            }
        })
    },
    FugitivesDetail: {
        screen: FugitivesDetailScreen
    },
    CapturedDetail: {
        screen: CapturedDetailScreen
    },
    AddFugitive: {
        screen: AddFugitiveScreen
    }

});

export default App;