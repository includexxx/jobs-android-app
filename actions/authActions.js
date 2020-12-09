import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import { authConstanst } from '../actions/constants';
import { AsyncStorage } from 'react-native';


export const signup = (user) => {
    return async (dispatch) => {
        const auth = firebase.auth();
        const db = firebase.firestore();
        dispatch({ type: `${authConstanst.USER_LOGIN}_REQUEST` });

        auth
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(data => {
                const currentUser = auth.currentUser;
                const name = user.name;
                console.log("data===>", data)
                console.log(name, data.user.uid, user.email)
                db.collection('users').add({
                    name: name,
                    uid: data.user.uid,
                    createdAt: new Date()
                }).then(async () => {
                    const loggedInUser = {
                        name: name,
                        uid: data.user.uid,
                        email: user.email
                    }
                    await AsyncStorage.setItem('user', JSON.stringify(loggedInUser));
                    console.log('User logged in successfully...!');
                    dispatch({
                        type: `${authConstanst.USER_LOGIN}_SUCCESS`,
                        payload: { user: loggedInUser }
                    });
                }).catch(err => {
                    console.log(err);
                    throw new Error(error);
                })
                console.log("Dfasdfasdf sesssssssssssss")
            }).catch(err => {
                dispatch({
                    type: `${authConstanst.USER_LOGIN}_FAILURE`,
                    payload: { err }
                });
                console.log(err);
            })
    }
}


export const signin = (user) => {
    return async dispatch => {
        const auth = firebase.auth();
        const db = firebase.firestore();

        dispatch({ type: `${authConstanst.USER_LOGIN}_REQUEST` });
        auth
            .signInWithEmailAndPassword(user.email, user.password)
            .then(async (data) => {
                console.log(data);
               

                const loggedInUser = {
                    name: name,
                    uid: data.user.uid,
                    email: data.user.email
                }

                await AsyncStorage.setItem('user', JSON.stringify(loggedInUser));

                dispatch({
                    type: `${authConstanst.USER_LOGIN}_SUCCESS`,
                    payload: { user: loggedInUser }
                });
            }).catch(error => {
                console.log(error);
                dispatch({
                    type: `${authConstanst.USER_LOGIN}_FAILURE`,
                    payload: { error }
                })
            })

    }
}

export const isLoggedInUser = () => {
    return async dispatch => {

        const user = await AsyncStorage.getItem('user') ? JSON.parse(await AsyncStorage.getItem('user')) : null;

        if (user) {
            dispatch({
                type: `${authConstanst.USER_LOGIN}_SUCCESS`,
                payload: { user }
            });
        } else {
            dispatch({
                type: `${authConstanst.USER_LOGIN}_FAILURE`,
                payload: { error: 'Login again please' }
            });
        }


    }
}


export const logout = (uid) => {
    const auth = firebase.auth();
    //const db = firebase.firestore();

    return async dispatch => {
        dispatch({ type: `${authConstanst.USER_LOGOUT}_REQUEST` });
        //Now lets logout user

        auth
            .signOut()
            .then(() => {
                //successfully
                AsyncStorage.clear();
                dispatch({ type: `${authConstanst.USER_LOGOUT}_SUCCESS` });
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: `${authConstanst.USER_LOGOUT}_FAILURE`, payload: { error } })
            })




    }
}