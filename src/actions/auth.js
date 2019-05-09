import { firebase } from "../components/firebase/firebase";

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogout = () => {
  return () => {
      return firebase.auth().signOut();
  };
};

export const logout = () => ({
    type: 'LOGOUT'
})