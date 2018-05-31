import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CellKey = styled.td`
  width: 5%;
`;

export class ProbabilitiesInfo extends Component {
  render() {
    const elements = [];
    for (let key in this.props.probabilities) {
      elements.push(
        <tr key={key}>
          <CellKey>{key === ' ' ? '\u00A0' : key}</CellKey>
          <td>{this.props.probabilities[key].toFixed(4)}</td>
        </tr>
      );
    }
    return (
      <div className="informationTable">
        <table className="table table-borderless table-sm">
          <tbody>{elements}</tbody>
        </table>
      </div>
    );
  }
}

ProbabilitiesInfo.propTypes = {
  probabilities: PropTypes.objectOf(PropTypes.number)
};
