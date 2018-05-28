import React, { Component } from "react";
import PropTypes from "prop-types";
import { MessageWithSyms } from "./messageWithSyms.js";

export class InformationTable extends Component {
  render() {
    return (
      <div className="informationTable">
        <table>
          <tbody>
            <tr>
              <td>Message</td>
              <td>
                <MessageWithSyms
                  message={this.props.info.message}
                  symbols={this.props.info.symbols}
                />
              </td>
            </tr>
            <tr>
              <td>Entropy</td>
              <td>{this.props.info.entropy.toString()}</td>
            </tr>
            <tr>
              <td>Redundancy</td>
              <td>{this.props.info.redundancy.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

InformationTable.propTypes = {
  info: PropTypes.instanceOf(InformationTable)
};
