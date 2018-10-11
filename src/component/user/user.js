import React from 'react'
import {connect} from 'react-redux'
import {Result} from 'antd-mobile'

@connect(
  state => state.user
)
class User extends React.Component {
  render() {
    const props = this.props;
    console.log(props)
    return props.user ? (
      <div>
        <Result
          img={<img src={require(`../img/${props.avatar}.png`)} style={{width: 50}} alt=''/>}
          title={props.user}
          message={props.type === 'boss' ? props.company : null}
        />
        <p>用户中心</p>
      </div>
    ) : null
  }

}

export default User