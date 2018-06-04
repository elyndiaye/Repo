import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../screens/LoginScreen';
import Repo from '../screens/RepoScreen';
import MainTabNavigator from './MainTabNavigator';


const RootStackNavigator = StackNavigator(
  {
    Login:{
      screen: Login,
    },
    Main: {
      screen: MainTabNavigator,
    },
    Repo: {
      screen: Repo,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
 
  render() {
    return <RootStackNavigator />;
  }
}
