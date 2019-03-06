import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };
  componentWillMount() {
  firebase.initializeApp({
      apiKey: 'AIzaSyBZ6Jp9o7kpgrPFCYY89vjq_96ZqzWRJac',
      authDomain: 'authentication-d3382.firebaseapp.com',
      databaseURL: 'https://authentication-d3382.firebaseio.com',
      projectId: 'authentication-d3382',
      storageBucket: 'authentication-d3382.appspot.com',
      messagingSenderId: '999130161220'
  });
 firebase.auth().onAuthStateChanged((user) => {
   if (user) {
     this.setState({ loggedIn: true });
   } else {
       this.setState({ loggedIn: false });
     }
   });
  }

  renderContent() {
    if (this.state.loggedIn) {
      //if the user is logged in show Logout btn
      return (
        /*initially the button was spread across the page
        so added it inside Card and CardSection to format the
        size of the button*/
        <Card>
          <CardSection>
            <Button>
             Log Out
            </Button>
          </CardSection>
        </Card>
      );
    }
    //if user is not loggedin show login form
    return <LoginForm />;
  }
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Header headerText='Authentication' />
          {this.renderContent()}
      </View>
    );
  }
}

export default App;
