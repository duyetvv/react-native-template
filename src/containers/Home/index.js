import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text } from 'react-native';

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
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
