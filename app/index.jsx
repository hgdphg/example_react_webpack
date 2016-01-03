import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello.jsx';
import './assets/styles/main.css';

main();

function main () {
  let app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(<Hello name="Hoang Phuong" age="29" />, app);
}


