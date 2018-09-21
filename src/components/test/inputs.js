import React, {Component} from 'react'

export default class inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      number: 2
    }
  }

  handleInputChange(event) {
    const target = event.target;
    // 多个input触发同一个方法，但是对处理方法做区分
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
        <label>
          is Going
          <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange.bind(this)}/>
        </label>
        <br/>
        <label>
          Number
          <input name="number" type="number" value={this.state.number} onChange={this.handleInputChange.bind(this)}/>
        </label>
      </form>
    )
  }
}