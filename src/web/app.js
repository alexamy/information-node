import React, { Component } from 'react';
import { InformationTable } from './informationTable.js';
import { Information } from '../information.js';

const info = new Information('privetikiki');

export class App extends Component {
  render() {
    return (
      <div className="App">
        <InformationTable info={info.total()} />
      </div>
    );
  }
}
