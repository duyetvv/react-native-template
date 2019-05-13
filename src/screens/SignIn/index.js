import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, Button } from 'react-native';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'SIGNIN'
    }
  }

  componentWillMount() {
    this.props.navigation.addListener('willFocus', (payload) => {
      console.log('SignIn Will Focus ', payload);
    });
    this.props.navigation.addListener('didFocus', (payload) => {
      console.log('SignIn Did Focus ', payload);
    });
    this.props.navigation.addListener('willBlur', (payload) => {
      console.log('SignIn Will Blur ', payload);
    });
    this.props.navigation.addListener('willBlur', (payload) => {
      console.log('SignIn Will Blur ', payload);
    });
  }
  
  componentDidMount() {
    console.log('SignIn Mounted');
  }

  componentWillUnmount() {
    console.log('SignIn Release');
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'SignIn Screen',
    };
  };

  render() {
    return (
      <View>
        <Text>Welcome to {this.state.message}!</Text>
        <Button
          title="Go to SignIn again"
          onPress={() => this.props.navigation.push('SignIn')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
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
