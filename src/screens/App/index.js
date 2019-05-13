import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text } from 'react-native';

import AppContainer from '../../routing';


class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello'
    }
  }

  render() {
    return (
      <AppContainer>
        <View>
          <Text>The imazing app say {this.state.message}!</Text>
        </View>
      </AppContainer>
    )
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);