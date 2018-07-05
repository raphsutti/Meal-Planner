import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

class Hello extends React.Component {
  render() { return <div>Hello!</div> }
}

class Goodbye extends Component {
  render() { return <div>Goodbye!</div> }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <BrowserRouter>
          <div>
            <Route path="/hello" component={Hello} />
            <Route path="/goodbye" component={Goodbye} />
          </div>
        </BrowserRouter>
        </p>
      </div>
    );
  }
}

export default App;
