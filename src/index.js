import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './route/root';
import registerServiceWorker from './registerServiceWorker';


// M站快速点击
// import FastClick from 'fastclick'
// FastClick.attach(document.body);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
