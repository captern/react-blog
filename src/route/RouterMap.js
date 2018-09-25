import Loadable from 'react-loadable';
import {Route, Switch} from 'react-router-dom'
import React from 'react';
import MyLoadingComponent from './RouterLoading'


const AsyncHome = Loadable({
  loader: () => import('../pages/App.js'),
  loading: MyLoadingComponent
});
const AsyncIndex = Loadable({
  loader: () => import('../pages/Index.js'),
  loading: MyLoadingComponent
});
export default ()=>{
  return(
    <Switch>
      <Route exact path='/' component={ AsyncHome }/>
      <Route exact path='/work' component={ AsyncIndex }/>
    </Switch>
  )
}