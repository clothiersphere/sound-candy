import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';
// import App from './App';
// import './index.css';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

ReactDOM.render(
 <Stream tracks={tracks} />,
  document.getElementById('app')
);

module.hot.accept();