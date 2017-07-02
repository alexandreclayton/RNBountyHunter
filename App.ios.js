import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FugitivesScreen, CapturedScreen } from './screens'

const App = TabNavigator({
    Fugitives: {
        screen: StackNavigator({
            Home: {
                screen:FugitivesScreen
            }
        })
    },
    Captured: {
        screen: StackNavigator({
            Home: {
                screen: CapturedScreen
            }
        })
    }
});

export default App;