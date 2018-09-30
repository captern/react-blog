import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import reducers from './reducer'
import './config'
import registerServiceWorker from './registerServiceWorker';


import AuthRouter from './component/authrouter/authrouter'
import Login from './container/login/login'
import Register from './container/register/register'
import BossInfo from './container/bossinfo/bossinfo'
import './index.css'
// import {counter} from './index.redux'


// compose 是专门用于组合函数的，为了启用chrome浏览器的resux调试工具
// const reduxDevtools = window.devToolsExtension ? window.devToolsExtension(): f=>f
// reduxDevtools 是为了检查本地是否有调试工具

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
function Boss(){
  return <h2>boss</h2>
}
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRouter></AuthRouter>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/bossinfo' component={BossInfo}></Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
