import React, {Component} from 'react'

export default class promotion extends Component {
  constructor(props) {
    super(props)
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value})
  }

  render() {
    function BoilingVerdict(props) {
      if (props.celsius >= 100) {
        return <p>水会烧开</p>
      }
      return <p>不会烧开</p>
    }

    // fieldset 可以将表单内容的一部分打包，生成一组相关表单的字段
    // legend 为 fieldset 元素自定义标题
    const temperature = this.state.temperature;

    // 转成摄氏温度
    function toCelsius(fahrenheit) {
      return (fahrenheit - 32) * 5 / 9;
    }

    // 转成华氏温度
    function toFahrenheit(celsius) {
      return (celsius * 9 / 5) + 32;
    }

    // 字符串截断并且转换
    function tryConvert(fahrenheit, celsius) {
      const input = parseFloat(temperature);
      if (Number.isNaN(input)) {
        return ''
      }
      // const output = convert(input);
      const output = toCelsius(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
    }

    return (
      <div>
        <fieldset>
          <legend>输入一个摄氏温度</legend>
          <input type="number" value={temperature} onChange={this.handleChange.bind(this)}/>
          <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
        </fieldset>

        <TemperatureInput scale="c"/>
        <TemperatureInput scale="f"/>
      </div>
    )
  }
}
// 温度输入框拆分，为了实现复用
const scaleNames = {
  c: '摄氏温度',
  f: '华氏温度'
};

// 可以在里面写多个子组件，但是只返回一个组件
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    // this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange.bind(this)}/>
      </fieldset>
    );
  }
}