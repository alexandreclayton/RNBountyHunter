import { StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FugitivesScreen, CapturedScreen } from './screens'

const App = StackNavigator({
    Home: {
        screen: TabNavigator({
            Fugitive: {
                screen: FugitivesScreen
            }, 
            Captured: {
                screen: CapturedScreen
            }
        }),
        navigationOptions: {
            headerStyle: {
            }
           
        }
    }
});
StatusBar.setTranslucent(false);

export default App;