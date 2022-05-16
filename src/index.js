import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1e5GOmSJXYP_PUuoqM4NRyrrNRx_X90k",
  authDomain: "ducklingtodo.firebaseapp.com",
  projectId: "ducklingtodo",
  storageBucket: "ducklingtodo.appspot.com",
  messagingSenderId: "429815563004",
  appId: "1:429815563004:web:d8a18e5ee452cdd8410d79",
  measurementId: "G-5ECHXC5DMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <App db={db} />
  </React.StrictMode>
, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
