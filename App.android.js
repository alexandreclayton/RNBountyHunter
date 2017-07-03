import { StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FugitivesScreen, CapturedScreen, FugitivesDetailScreen } from './screens'

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
    FugitivesDetail : {
        screen: FugitivesDetailScreen
    }
});
StatusBar.setTranslucent(false);

export default App;