import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;//this.state has the email and password entered
    this.setState({ error: '', loading: true }); //clearing the error msg, changing loading flag
    //passing email and password to firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
     .then(this.onLoginSuccess.bind(this))
     .catch(() => {
       //if the signIn fails help create an account
       firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
          /* if the creation of account fails show error message
          make the component re-render and show error on secureTextEntry*/
     });
  }

/*
1. clear out any error msgs on screen
2.make loading:false, dont need to show spinner
3.clean out form to stop shpwing email & pswd
*/
onLoginSuccess() {
  this.setState({
    email: '',
    password: '',
    loading: false,
    error: ''
  });
}

/*
1. cset the error message
2.stop the spinner
*/
onLoginFail() {
  this.setState({ error: 'Authentication Failed!', loading: false });
}

renderButtonOrSpinner() {
  if (this.state.loading) {
    return <Spinner size='small' />;
  }
    return (
      <Button whenPressed={this.onButtonPress.bind(this)}>
       Log In
      </Button>
    );
  }

   render() {
      return (
        <Card>
          <CardSection>
            <Input
               label='Email'
               placeholder='user@gmail.com'
               value={this.state.email}
               onChangeText={email => this.setState({ email })}
            />
          </CardSection>


          <CardSection>
            <Input
              secureTextEntry
              label='Password'
              placeholder='password'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
             {this.state.error}
          </Text>

          <CardSection>
              {this.renderButtonOrSpinner()}

          </CardSection>
        </Card>
      );
   }
  }

  const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
  };

export default LoginForm;
