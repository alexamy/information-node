import React, { Component } from "react";
import { InformationTable } from "./informationTable.js";
import { InputForm } from "./inputForm.js";
import { Information } from "../information.js";
import { OutgoingMessage } from "http";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
      info: new Information("Hello"),
      showInfo: true
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
      info: new Information(message),
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
