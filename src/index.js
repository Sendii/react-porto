import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/style.css'
import reportWebVitals from './reportWebVitals';
import Navbar from './component/template/Navbar'

ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,
  */
  // <Home />,
  <Navbar />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
