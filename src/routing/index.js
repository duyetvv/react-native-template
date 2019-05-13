
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../containers/Home';
import SignInScreen from '../containers/SignIn';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    path: '/',
    navigationOptions: ({ navigation }) => {
      console.log(navigation);
      return ({
      title: navigation.getParam('title') || 'Home',
    })}
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

