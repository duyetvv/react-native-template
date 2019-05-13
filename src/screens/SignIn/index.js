import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, Button, Image } from 'react-native';

import { styles } from './styles';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'SIGNIN'
    }
  }
  
  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Sign In',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/images/sign-in.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  };

  render() {
    return (
      <View>
        <Text>Welcome to {this.state.message}!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
