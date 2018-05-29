import React, { Component } from 'react';
import { InformationTable } from './informationTable.js';
import { InputForm } from './inputForm.js';
import { Information } from '../information.js';
import styled from 'styled-components';

const AppView = styled.div`
  font-size: 24px;
`;

export class App extends Component {
  constructor(props) {
    super(props);
    const message = 'поле полное полыни выпало полоть полине';
    this.state = {
      message,
      info: new Information(message)
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // const prepare = message =>
    //   message
    //     .toLowerCase()
    //     .replace(/[^ а-я]/g, "")
    //     .trim();
    const message = event.target.value;
    this.setState({
      message,
      info: new Information(message)
    });
  }

  render() {
    return (
      <AppView className="container App">
        <InputForm
          value={this.state.message}
          handleChange={this.handleChange}
        />
        <InformationTable info={this.state.info} />
      </AppView>
    );
  }
}
