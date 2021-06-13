import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import firebase from 'firebase';
import './index.scss';

var firebaseConfig = {
  apiKey: "AIzaSyBmqedhPVtUbvAXRLjosMDLIQOi3h_i2EM",
  authDomain: "psychologists-56ac6.firebaseapp.com",
  projectId: "psychologists-56ac6",
  storageBucket: "psychologists-56ac6.appspot.com",
  messagingSenderId: "285495958025",
  appId: "1:285495958025:web:aa878ec0cb0c50adc176d8",
  measurementId: "G-SZLGWETVEX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const docRef = db.collection('psychologists').doc('list');

export const Context = createContext(null);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Context.Provider value={{
        firebase,
        db,
        docRef
      }}>
        <App />
      </Context.Provider>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
