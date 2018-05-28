import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class InformationTable extends Component {
  render() {
    return (
      <div className="informationTable">
        <table>
          <tbody>
            <tr>
              <td>Message</td>
              <td>{this.props.info.message}</td>
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
