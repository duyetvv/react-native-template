
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../containers/Home';
import SignInScreen from '../containers/SignIn';


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

