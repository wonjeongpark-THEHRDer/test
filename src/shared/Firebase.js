// import * as firebase from 'firebase';
const firebase = require('firebase');
require("firebase/auth");
require("firebase/storage");
require("firebase/database");

let config = {
    apiKey: "AIzaSyD4BBwY7Cwa2tFRHQzliZcHZomQwEHI3Nw",
    authDomain: "thehrdertest.firebaseapp.com",
    databaseURL: "https://thehrdertest.firebaseio.com",
    projectId: "thehrdertest",
    storageBucket: "",
    messagingSenderId: "697309672779",
    appId: "1:697309672779:web:d3dc30826f2f421007e4ce",
    measurementId: "G-CYYVLES6KH"
}
export const fire = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
        // database = firebase.database()
}

export const getFireDB = () => {
    return firebase.database().ref('/').once('value')
}