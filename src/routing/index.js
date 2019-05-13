
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/Home';
import SignInScreen from '../screens/SignIn';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: SignInScreen,
  },
}, {
    initialRouteName: 'Home',
});


export default AppContainer = createAppContainer(AppNavigator);

