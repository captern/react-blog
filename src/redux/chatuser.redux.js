import axios from "axios/index";

const USER_LIST = 'USER_LIST';

const initState = {
  userList: []
}

export function chatuser(state=initState, action) {
  switch (action.type) {
    case USER_LIST:
      return {...state, userList: action.payload};
    default:
      return state
  }
}

function userList(data) {
  return {
    type: USER_LIST, payload: data
  }
}

export function getUserList(type) {
  return dispatch => {
    axios.get('/user/list?type=' + type).then(res => {
      if (res.data.code === 0) {
        // this.setState({data: res.data.data})
        dispatch(userList(res.data.data))
      }
    })
  }
}