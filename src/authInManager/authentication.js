import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';

export const initializeApp = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const createUserWithEmailAndPassword = (user) => {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((response) => {
            setUserName(user.name)

            const currentUser = {
                name: user.name,
                email: user.email,
                loggedIn: true,
                error: ""
            }
            return currentUser;
        })
        .catch((err) => {
            const currentUser = {
                name: user.name,
                email: user.email,
                loggedIn: false,
                error: err.message
            }
            return currentUser;
        });
}

export const signInUserWithEmailAndPassword = (user) => {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((response) => {
            const currentUser = {
                name: response.user.displayName,
                email: response.user.email,
                loggedIn: true,
                error: ""
            }
            return currentUser;
        })
        .catch((error) => {
            const currentUser = {
                loggedIn: false,
                error: error.message
            }
            return currentUser;
        })
}

export const signOut = () => {
    firebase.auth().signOut();
}

const setUserName = (name) => {
    firebase.auth().currentUser.updateProfile({
        displayName: name
    });
}