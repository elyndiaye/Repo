import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class MainTabNavigator extends React.Component {
  static navigationOptions = {
    title:   'DDM',
  };
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', loading: false };
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View>
        <Text>NavigafotScreenOpen</Text>
      </View>
    )
  }

}