import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import './components/globalcss/init.scss'
import App from './route/root';
import registerServiceWorker from './registerServiceWorker';

// M站快速点击
import FastClick from 'fastclick'

FastClick.attach(document.body);


// // loading动画dom
var loadingDiv = document.getElementById('pageloading')
// 判断浏览器兼容前缀
var useTransform = (loadingDiv.style['msTransform'] && 'msTransform')
  || (loadingDiv.style['webkitTransform'] && 'webkitTransform')
  || (loadingDiv.style['MozTransform'] && 'MozTransform')
  || (loadingDiv.style['OTransform'] && 'OTransform')
  || 'transform';
// loadingDiv.style[useTransform] = styles;


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
