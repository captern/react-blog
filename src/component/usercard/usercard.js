import React from 'react'
import PropTypes from 'prop-types'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'


class UserCard extends React.Component {

  static propTypes = {
    // 暂时这样写，纺织报错
    // userLit: PropTypes.array.isRequired
    userLit: PropTypes.array
  };

  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <WingBlank>
        <WhiteSpace/>
        {this.props.userList.map(v => (
          // 如果用户有头像，则返回，否则不展示
          v.avatar ? <Card key={v._id}>
            <Header
              title={v.user}
              // thumb={require(`../img/${v.avatar}.png`)}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}
            />
            <Body>
            {v.type === 'boss' ? <div>公司：{v.company}</div> : null}
            {/*将换行符也保存下来*/}
            {v.desc.split('\n').map(d => (
              <div key={d}>{d}</div>
            ))}
            {v.type === 'boss' ? <div>薪资：{v.money}</div> : null}
            </Body>
          </Card> : null
        ))}
      </WingBlank>
    )
  }
}

export default UserCard