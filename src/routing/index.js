
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/Home';
import SettingScreen from '../screens/Setting';
import SignInScreen from '../screens/SignIn';
import DrawerContentComponent from '../components/DrawerContent';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Setting: {
    screen: SettingScreen,
  },
  SignIn: {
    screen: SignInScreen,
  },
}, {
  contentComponent: DrawerContentComponent
});


export default AppContainer = createAppContainer(MyDrawerNavigator);

