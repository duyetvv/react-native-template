import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text } from 'react-native';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello'
    }
  }

  render() {
    return (
      <View>
        <Text>The imazing app say {this.state.message}!</Text>
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
