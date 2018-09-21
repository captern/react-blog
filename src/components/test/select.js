import React, {Component} from 'react'

export default class select extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'name'}
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event){
    alert(this.state.value);
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          pink your change:
          <select value={this.state.value} onChange={this.handleChange.bind(this)}>
            <option value="type">type</option>
            <option value="change">change</option>
            <option value="name">name</option>
            <option value="llalalal">llalalal</option>
          </select>
          <input type="submit" value="Submit"/>
        </label>
      </form>
    )
  }
}