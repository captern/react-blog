import React, {Component} from 'react'

export default class test extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true, name: 'asd', isLogIn: false}
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick(name, e) {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  handleLoginClick() {
    this.setState({isLogIn: true})
  }

  handleLogoutClick() {
    this.setState({isLogIn: false})
  }

  render() {
    function LoginButton(props) {
      return (
        <button onClick={props.onClick}>
          Login
        </button>
      );
    }

    function LogoutButton(props) {
      return (
        <button onClick={props.onClick}>
          Logout
        </button>
      );
    }
    const isLogIn = this.state.isLogIn;
    // const messages = ['React', 'Re: React', 'Re:Re: React'];
    const messages = ['React', 'Re: React', 'Re:Re: React'];


    const numbers = [1,2,3,4,5];
    const double = numbers.map((number) => number * 2);
    console.log(double)



    let button = null;
    if(isLogIn){
      button = <LogoutButton onClick={this.handleLogoutClick.bind(this)} />;
    }else{
      button = <LoginButton onClick={this.handleLoginClick.bind(this)} />;
    }

    return (
      <div>
        <button onClick={this.handleClick.bind(this, this.state.name)}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <p>{this.state.name}</p>
        {button}

        <div>
          <h1>Hello!</h1>
          {messages.length > 0 &&
          <h2>
            You have {messages.length} unread messages.
          </h2>
          }
        </div>
      </div>
    )
  }
}