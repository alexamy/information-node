import React, { Component } from "react";
import PropTypes from "prop-types";

export class ProbabilitiesInfo extends Component {
  render() {
    const els = [];
    els.push(
      <tr key="header">
        <td colSpan="2">Вероятности</td>
      </tr>
    );
    for (let key in this.props.probabilities)
      els.push(
        <tr key={key}>
          <td>{key}</td>
          <td>{this.props.probabilities[key].toFixed(6)}</td>
        </tr>
      );
    return els;
  }
}

ProbabilitiesInfo.propTypes = {
  probabilities: PropTypes.objectOf(PropTypes.number)
};
