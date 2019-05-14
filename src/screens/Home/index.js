import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, Image, Button } from 'react-native';

import DrawerToggle from '../../components/DrawerToggle';

import { styles } from './styles';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'HOME'
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/images/chats-icon.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    };
  };

  openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View>
        <DrawerToggle openDrawer={this.openDrawer} />
        <Text>Welcome to {this.state.message}!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('SignIn')}
          title="Go to SignIn"
        />
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
