import React, {Component} from 'react'
export default class form extends Component{
  constructor(props){
    super(props);
    this.state = {value: ''}
  }

  handleSubmit(event){
    alert(this.state.value)
  }
  handleChange(event){
    // this.setState({value: event.target.value});
    // 将输入的值自动转换成大写字母
    this.setState({value: event.target.value.toUpperCase()});
    // 阻止默认事件
    event.preventDefault()
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          name:
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}