import React, { Component } from 'react';
import { InformationTable } from './informationTable.js';
import { InputForm } from './inputForm.js';
import { Information } from '../information.js';

export class App extends Component {
  constructor(props) {
    super(props);
    const message = 'Hello';
    this.state = { message, info: new Information(message), showInfo: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const message = event.target.value.toLowerCase().replace(/[^ а-я]/g, '');

    this.setState({
      message,
      info: new Information(message.trim()),
      showInfo: message.length > 1
    });
  }

  render() {
    return (
      <div className="App">
        <InputForm
          message={this.state.message}
          handleChange={this.handleChange}
        />
        <InformationTable info={this.state.info.total()} />
      </div>
    );
  }
}
