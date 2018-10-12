import React from 'react'

class Chat extends React.Component {
  render(){
    console.log(this.props)
    return (
      <p> {this.props.match.params.user}</p>
    )
  }
}
export default Chat