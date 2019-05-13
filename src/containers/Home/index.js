import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'HOME'
    }
  }

  componentDidMount() {
    console.log('Home Mounted');
  }

  componentWillUnmount() {
    console.log('Home Release');
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title') || 'Home',
    };
  };


  onPress = () => {
    this.props.navigation.navigate('SignIn', {
      type: 'navigate',
      from: 'Home',
      dest: 'SignIn'
    });
  }

  render() {
    return (
      <View>
        <Text>Welcome to {this.state.message}!</Text>
        <Button title="Go to SignIn" onPress={this.onPress} />

        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({title: 'Updated Home!'})}
        />
        <NavigationEvents
          onWillFocus={payload => console.log('Home will focus',payload)}
          onDidFocus={payload => console.log('Home did focus',payload)}
          onWillBlur={payload => console.log('Home will blur',payload)}
          onDidBlur={payload => console.log('Home did blur',payload)}
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
