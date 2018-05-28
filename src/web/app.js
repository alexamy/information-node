import React, { Component } from 'react';
import { Information } from '../information.js';

const info = new Information('privetikiki');

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> {info.entropy} </p>
      </div>
    );
  }
}

export default App;
