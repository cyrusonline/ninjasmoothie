import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBrxJHAhBYtqsK_VGoBP4-8wZxvYwEQce0",
    authDomain: "ninja-smoothies-a0705.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-a0705.firebaseio.com",
    projectId: "ninja-smoothies-a0705",
    storageBucket: "ninja-smoothies-a0705.appspot.com",
    messagingSenderId: "34643360211"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots:true})
  export default firebaseApp.firestore()