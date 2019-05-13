
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/Home';
import SignInScreen from '../screens/SignIn';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title') || 'Home',
    })
  },
  SignIn: {
    screen: SignInScreen,
  },
}, {
    initialRouteName: 'Home',
});

/* Or we can use shorthand to config the route configuration as below block code*/
// const AppNavigator = createStackNavigator({
//   Home: HomeScreen,
//   SignIn: SignInScreen,
// }, {
//   initialRouteName: 'Home',
// });

/* Init Navigation without the initial router */
// const AppNavigator = createStackNavigator({
//   Home: HomeScreen,
//   SignIn: SignInScreen,
// });


export default AppContainer = createAppContainer(AppNavigator);

