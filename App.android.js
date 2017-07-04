import { StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FugitivesScreen, CapturedScreen, FugitivesDetailScreen, CapturedDetailScreen } from './screens'

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
    }
});
StatusBar.setTranslucent(false);

export default App;