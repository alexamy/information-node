import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CellKey = styled.td`
  width: 5%;
`;

export class KeyValueTable extends Component {
  processValue(val) {
    if (typeof val === 'number') {
      return val.toFixed(4);
    } else return val;
  }

  render() {
    const elements = [];
    for (let key in this.props.object) {
      elements.push(
        <tr key={key}>
          <CellKey>{key === ' ' ? '\u00A0' : key}</CellKey>
          <td>{this.processValue(this.props.object[key])}</td>
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

KeyValueTable.propTypes = {
  object: PropTypes.objectOf(PropTypes.any)
};
