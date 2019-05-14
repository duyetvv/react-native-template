import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, Image } from 'react-native';

import DrawerToggle from '../../components/DrawerToggle';

import { styles } from './styles';


class Setting extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'SETTING'
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Setting',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/images/sign-in.png')}
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
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
