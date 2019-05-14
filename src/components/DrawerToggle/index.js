import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';

export default class DrawerToggle extends React.PureComponent {
  render() {
    return (
    <View style={{
      height: 70,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <TouchableHighlight 
        style={{ marginLeft: 10, marginTop: 15 }}
        onPress={() => { this.props.openDrawer() }}
      >
        <Image
          style={{ width: 32, height: 32 }}
          source={{ uri: 'https://png.icons8.com/ios/2x/menu-filled.png' }}
        />
      </TouchableHighlight>
    </View>);
  }
}