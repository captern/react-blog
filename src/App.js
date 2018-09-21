import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/test/test'
import Form from './components/test/form'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Test></Test>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form></Form>
      </div>
    );
  }
}

export default App;
