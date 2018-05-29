import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProbabilitiesInfo extends Component {
  render() {
    const elements = [];
    for (let key in this.props.probabilities) {
      elements.push(
        <div className="col-sm" key={key}>
          <div className="row">{key === ' ' ? '\u00A0' : key}</div>
          <div className="row">{this.props.probabilities[key].toFixed(6)}</div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">{elements}</div>
      </div>
    );
  }
}

ProbabilitiesInfo.propTypes = {
  probabilities: PropTypes.objectOf(PropTypes.number)
};
