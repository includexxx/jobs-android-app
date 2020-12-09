import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDx5xMbMJv62klp28x8tFtmfPxXHeomxMQ",
    authDomain: "jobs-dhaka.firebaseapp.com",
    databaseURL: "https://jobs-dhaka.firebaseio.com",
    projectId: "jobs-dhaka",
    storageBucket: "jobs-dhaka.appspot.com",
    messagingSenderId: "899370672212",
    appId: "1:899370672212:web:cd9b22066c5ceec83d4dc1",
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
firebase.firestore().settings({ experimentalForceLongPolling: true });

export { firebase };
