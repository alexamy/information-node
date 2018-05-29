import React, { Component } from 'react';
import styled from 'styled-components';

import { InformationTable } from './informationTable.js';
import { InputForm } from './inputForm.js';
import { ToggleGroup } from './toggleGroup.js';

import { Information } from '../information.js';

const AppView = styled.div`
  font-size: 24px;
  padding: 1%;
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
        <ToggleGroup />
        <InputForm
          value={this.state.message}
          handleChange={this.handleChange}
        />
        <InformationTable info={this.state.info} />
      </AppView>
    );
  }
}
