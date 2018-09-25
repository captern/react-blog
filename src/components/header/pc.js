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
  constructor() {
    super()
    this.state = {
      nav: [
        {indent: true, text: 'HOME', herf: '/'},
        {indent: false, text: 'WORK', herf: '/work'},
      ],
      now: TimeNow(), //当前index，用来避免重复点击当前nav引起的页面切换效果
    }
  }

  componentDidMount() {
    setInterval(this.timeRe.bind(this), 1000)
  }

  componentWillMount() {
    // 组件渲染前 判断当前location为第几个，为第几个导航添加active样式
    let paths = []
    // 将页面连接改变成数组
    this.state.nav.map((i) => paths.push(i.herf.toString()))
    let path = this.props.history.location.pathname.toString()
    let index = paths.indexOf(path) > -1 ? paths.indexOf(path) : 1
    this.handleIndex(index)
  }

  handleIndex(index) {
    let newNav = this.state.nav
    newNav.forEach(t => t.indent = false)
    newNav[index].indent = true;
    this.setState({
      nav: newNav,
      now: index
    })
  }

  toLink(n, event) {
    const index = this.state.nav.indexOf(n);
    if (index === this.state.now) return;
    this.handleIndex(index)
    this.props.isRoute(true);
    this.setHistory = setTimeout(() => {
      this.props.history.push(this.state.nav[index].herf)
    }, 1000)
  }

  timeRe() {
    this.setState({
      time: TimeNow()
    })
    console.log('121')
  }

  render() {
    return (
      <div className="app-center">
        <nav ref="test" className="nav">
          <span><img src={this.props.logo} alt=""/></span>
          {this.state.nav.map((nav,i) => (
            <a key={i} className={nav.indent? 'nav-index':''} onClick={this.toLink.bind(this,nav)}>{nav.text}</a>
          ))}
        </nav>
        <div className="times">
          <a target="_blank" href="https://github.com/ChuckOu"><img src={this.props.git} alt=""/></a>
          <time>{this.state.time}</time>
        </div>
      </div>
    )
  }
}