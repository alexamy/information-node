import React, { Component } from "react";
import { InformationTable } from "./informationTable.js";
import { InputForm } from "./inputForm.js";
import { Information } from "../information.js";
import styled from "styled-components";

const AppView = styled.div`
  width: 500px;
  font-size: 24px;
`;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "ваше сообщение",
      info: new Information("ваше сообщение")
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
      <AppView className="App">
        <InputForm
          value={this.state.message}
          handleChange={this.handleChange}
        />
        <InformationTable info={this.state.info.total()} />
      </AppView>
    );
  }
}
