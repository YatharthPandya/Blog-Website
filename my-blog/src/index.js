import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0pAdcQIVV1lSy1aWGVDFA3i6BhYkfU_o",
  authDomain: "my-react-blog-c5b6b.firebaseapp.com",
  projectId: "my-react-blog-c5b6b",
  storageBucket: "my-react-blog-c5b6b.appspot.com",
  messagingSenderId: "858006309028",
  appId: "1:858006309028:web:456f0d1edeb604c550fe31"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
