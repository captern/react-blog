// 导航栏组件
import React, {Component} from 'react'

// 规整时间
function PollyTime(t) {
  let _t = +t < 10 ? `0${t}` : t;
  return _t
}
// 将规整后的时间拼接出时分秒，作为跳转的唯一判断
function TimeNow() {
  const time = new Date();
  return `${PollyTime(time.getHours())}:${PollyTime(time.getMinutes())}:${PollyTime(time.getSeconds())}`
}

console.log(TimeNow())
export default class Header extends Component {
  render() {
    return (
      <div className="app-center">
        <nav ref="test" className="nav">
          <span><img src={this.props.logo} alt=""/></span>
          <span><img src={this.props.git} alt=""/></span>
        </nav>
        <div className="times">
        </div>
      </div>
    )
  }
}