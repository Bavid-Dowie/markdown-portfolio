import React, { Component } from 'react';
import Book from './Book';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Book/>
        </header>
      </div>
    );
  }
}

export default App;
