import axios from 'axios'
import {getRedirectPath} from '../util'
// reducers
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

const initState = {
  redirectTo: '',     // 成功之后的跳转地址
  isAuth: false,
  msg: '',
  user: '',
  pwd: '',
  type: ''
};

// state = initState  是为 state 设置默认初始值
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload};
    // getRedirectPath(action.payload)  用于判断跳转的信息
    case LOGIN_SUCCESS:
      // 登录成功的跳转
      return {...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload};
    case ERROR_MSG:
      return {...state, msg: action.msg, isAuth: false};
    default:
      return state
  }
}

function loginSuccess(data) {
  return {type: LOGIN_SUCCESS, payload: data}
}

function registerSuccess(data) {
  return {type: REGISTER_SUCCESS, payload: data}
}

function errorMsg(msg) {
  return {type: ERROR_MSG, msg: msg}
  // return {msg, type: ERROR_MSG}
  // 两种写作规范，如果键和值相同，可以简写，但是必须放在前面
}

// 登录模块
export function login({user, pwd}) {
  if (!user || !pwd) {
    return errorMsg('用户名密码必须输入')
  }
  return dispatch => {
    axios.post('/user/login', {user, pwd}).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        // 登录成功
        dispatch(loginSuccess(res.data.data))       // res.data.data 是后端返回的字段
      } else {
        // 注册失败
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

// 注册模块
export function register({user, pwd, repeatPwd, type}) {
  if (!user || !pwd || !type) {
    return errorMsg('用户名密码必须输入')
  }
  if (pwd !== repeatPwd) {
    return errorMsg('密码和确认密码不同')
  }
  // 需要使用异步函数
  return dispatch => {
    axios.post('/user/register', {user, pwd, type}).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        // 注册成功
        dispatch(registerSuccess({user, pwd, type}))
      } else {
        // 注册失败
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}