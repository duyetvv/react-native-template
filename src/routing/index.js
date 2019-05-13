
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from '../screens/Home';
import SignInScreen from '../screens/SignIn';
import SettingsScreen from '../screens/Settings';
import DetailsScreen from '../screens/Details';

import { getTabBarIcon } from '../components/TabBarIcon';
/**
 * Single Screen for earch Tab 
 */
// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     SignIn: {
//       screen: SignInScreen,
//     },
//   }, {
//     // initialRouteName: 'Home',
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) =>
//         getTabBarIcon(navigation, focused, tintColor),
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//   }
// );


/**
 * Multi Screen for earch Tap
 */

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  SignIn: SignInScreen,
});


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
});


const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  }, {
    // initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default AppContainer = createAppContainer(TabNavigator);

