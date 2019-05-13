import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, Button } from 'react-native';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'HOME'
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
    };
  };

  render() {
    return (
      <View>
        <Text>Welcome to {this.state.message}!</Text>
        <Button
          title="Go to SignIn"
          onPress={() => this.props.navigation.navigate('SignIn')}
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
