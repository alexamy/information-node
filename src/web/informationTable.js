import React, { Component } from "react";
import PropTypes from "prop-types";
import { Information } from "../information.js";
import { MessageWithSyms } from "./messageWithSyms.js";
import { ProbabilitiesInfo } from "./probabilitiesInfo.js";

export class InformationTable extends Component {
  render() {
    return (
      <div className="informationTable">
        <table>
          <tbody>
            <tr>
              <td>Сообщение</td>
              <td>
                <MessageWithSyms
                  message={this.props.info.message}
                  symbols={this.props.info.symbols}
                />
              </td>
            </tr>
            <ProbabilitiesInfo probabilities={this.props.info.probabilities} />
            <tr>
              <td>Энтропия</td>
              <td>{this.props.info.entropy.toFixed(6)}</td>
            </tr>
            <tr>
              <td>Максимальная энтропия</td>
              <td>{this.props.info.redunMax.toFixed(6)}</td>
            </tr>
            <tr>
              <td>Избыточность</td>
              <td>{this.props.info.redundancy.toFixed(6)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

InformationTable.propTypes = {
  info: PropTypes.instanceOf(Information)
};
