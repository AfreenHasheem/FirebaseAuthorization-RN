# FirebaseAuthorization-RN
This project uses firebase to authenticate a user. The login form takes in email and password. The first time email and password 
are entered, a new user is created and the Logout button is displayed. Once Logout button is clicked the Login form is displayed.
If the email or password combinations are incorrect, an "Authentication Failed!" message is displayed.
A spinner is shown for during logging in and logging out for user interaction.

There are 2 main components:
1. App.js : 
Contains the initial app connection to Firebase and a componentWillMount() which is the start point to the project.
firebase.auth().onAuthStateChanged(user) : checks the LoggedIn status of the user.

2. LoginForm.js :
Creates and validates a user using email and password entered : firebase.auth().signInWithEmailAndPassword(email, password) and firebase.auth().createUserWithEmailAndPassword(email, password)
Shows error message on unsuccessful login : onLoginFail()


          
