import React, {Component} from 'react'

function FancyBorder(props) {
  return(
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}
function Dialog(props) {
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  )
}

export default class children extends Component{
  constructor(props){
    super(props);
    this.state = {login: ''}
  }
  handleChange(e){
    this.setState({login: e.target.value})
  }
  handleSignUp(){
    alert(this.state.login)
  }
  render(){
    return(
      <Dialog title="Program" message="How shoule we refre to you">
        <input type="text" value={this.state.login} onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleSignUp.bind(this)}>Sign Me Up</button>
      </Dialog>
    )
  }
}