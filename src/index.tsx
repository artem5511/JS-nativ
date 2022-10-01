import React from 'react';
import ReactDOM from 'react-dom/client';
import {User} from './05.callback/05.callback'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ManComponent} from "./06-destructuring-assignment/Destructuring";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ManComponent car={any} food={any} man={Array}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
