import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
          <td>{key === ' ' ? '\u00A0' : key}</td>
          <td>{this.processValue(this.props.object[key])}</td>
        </tr>
      );
    }
    return (
      <table className="table table-sm table-striped table-borderless">
        <tbody>{elements}</tbody>
      </table>
    );
  }
}

KeyValueTable.propTypes = {
  object: PropTypes.objectOf(PropTypes.any)
};
