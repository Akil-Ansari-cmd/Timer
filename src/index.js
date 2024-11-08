import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cart from './Components/Cart';
import UseEffect from './Components/UseEffect';
import UseEffect2 from './Components/UseEffect2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <UseEffect />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
