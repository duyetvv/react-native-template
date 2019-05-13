
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/Home';
import SignInScreen from '../screens/SignIn';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  SignIn: {
    screen: SignInScreen,
  },
});


export default AppContainer = createAppContainer(MyDrawerNavigator);

