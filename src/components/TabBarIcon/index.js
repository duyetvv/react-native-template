import React from 'react';
import { View, Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;

    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {
          badgeCount > 0 && (
            <View
              style={{
                position: 'absolute',
                right: -6,
                top: -3,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 12,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {badgeCount}
              </Text>
            </View>
          )
        }
      </View>
    );
  }
}


const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};


export const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Settings') {
    iconName = `ios-options${focused ? '' : '-outline'}`;
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};