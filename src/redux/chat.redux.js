import axios from 'axios'
import io from 'socket.io-client'

const socket = io('ws://localhost:9093');

// 获取聊天列表
const MSG_LIST = 'MSG_LIST';
// 读取信息
const MSG_RECV = 'MSG_RECV';
// 标识已读
const MSG_READ = 'MSG_READ';
const initState = {
  chatMsg: [],
  users: {},
  unread: 0
};

export function chat(state = initState, action) {
  switch (action.type) {
    case MSG_LIST:
      return {
        ...state,
        users: action.payload.users,
        chatMsg: action.payload.msgs,
        unread: action.payload.msgs.filter(v => !v.read && v.to === action.payload.userId).length
      };
    case MSG_RECV:
      const n = action.payload.to === action.userId ? 1 : 0;
      return {...state, chatMsg: [...state.chatMsg, action.payload], unread: state.unread + n};
    case MSG_READ:      //修改未读消息数字
      return {
        ...state, chatMsg: state.chatMsg.map(v => ({...v, read: true})), unread: state.unread - action.payload.num    // 简单写法
        // ...state, chatMsg: state.chatMsg.map(v => {
        //   v.read = true;
        //   return v
        // }), unread: state.unread - action.payload.num
      };
    default:
      return state
  }
}

function msgList(msgs, users, userId) {
  return {type: MSG_LIST, payload: {msgs, users, userId}}
}

function msgRecv(msg, userId) {
  return {userId, type: MSG_RECV, payload: msg}
}

function msgRead({from, userId, num}) {
  return {type: MSG_READ, payload: {from, userId, num}}
}

// 将信息标记为已读
export function readMsg(from) {
  return (dispatch, getState) => {
    axios.post('/user/readmsg', {from}).then(res => {
      const userId = getState().user._id;
      if (res.status === 200 && res.data.code === 0) {
        dispatch(msgRead({userId, from, num: res.data.num}))
      }
    })
  }
}

export function recvMsg() {
  return (dispatch, getState) => {
    socket.on('recvmsg', function (data) {
      const userId = getState().user._id;
      dispatch(msgRecv(data, userId))
    })
  }
}

export function sendMsg({from, to, msg}) {
  return dispatch => {
    socket.emit('sendmsg', {from, to, msg})
  }
}

export function getMsgList() {
  return (dispatch, getState) => {   // getState 可以获取应用里面所有的状态
    axios.get('/user/getmsglist').then(res => {
      if (res.status === 200 && res.data.code === 0) {
        const userId = getState().user._id;
        dispatch(msgList(res.data.msgs, res.data.users, userId))
      }
    })
  }
}