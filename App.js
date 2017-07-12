import { StatusBar, Platform } from 'react-native'
import Routes from './routes/Routes'
import Dao from './db/Dao'

if (Platform.OS == 'android') {
    StatusBar.setTranslucent(false);    
}

Dao.initDB()
.then() 
.catch(error => alert(error))

export default Routes
