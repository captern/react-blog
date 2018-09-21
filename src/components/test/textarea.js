import React, {Component} from 'react'

export default class textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please writer an'
    }
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(this.state.value);
    // 阻止默认事件
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          name:
          <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}