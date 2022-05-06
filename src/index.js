import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import TEST from './TEST/TEST';
// import App from './App';
// import Sample1 from './sample';
import reportWebVitals from './reportWebVitals';
import Exam from './Exam';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Sample1 /> */}
    {/* <TEST /> */}
  <Exam name=" Kavin" age="20"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
