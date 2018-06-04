import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import firebase from 'react-native-firebase';
import MainTabNavigation from '../navigation/MainTabNavigator';
import Repo from '../screens/RepoScreen';
import { StackNavigator } from 'react-navigation';


export default class login extends React.Component {
  static navigationOptions = {
    title: 'Acesso ao Repositorio DDM',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#2F95D6',
      borderBottomColor: '#ffffff',

    },
    headerTitleStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  };

  state = {
    email: '',
    password: '',
    isAuthenticated: false,
    loading: false,
  };

  login = async () => {
    const { email, password } = this.state;

    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ isAuthenticated: true });
          this.props.navigation.navigate('Repo');
          console.log(user);
        })
        .catch(() => {
          this.setState({ error: 'Authentication Failed', loading: false });
        })
    } catch (err) {
      console.log(err);
    }
  }

  signUp = async () => {
    const { email, password } = this.state;

    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ isAuthenticated: true });
          this.props.navigation.navigate('Repo');
          console.log(user);
        })
        .catch(() => {
          this.setState({ error: 'Authentication Failed', loading: false });
        })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite o e-email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={this.state.password}
          onChangeText={password => this.setState({ password })} />

        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSiginUp} onPress={this.signUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

         <Text style={styles.welcome}>Bem vindo ao repositorio da DDM LATAM</Text> 
      </View>
    )
  }

}
//{this.state.isAuthenticated ? <Text style={styles.welcome}>Bem vindo ao repositorio da DDM LATAM</Text> : null} for line 100
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    height: 45,
    backgroundColor: '#069',
    alignSelf: 'stretch',
    borderWidth: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSiginUp: {
    top: 10,
    height: 45,
    backgroundColor: '#069',
    alignSelf: 'stretch',
    borderWidth: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  welcome: {
    top: 30,
    color: '#FFF'
  },
});
