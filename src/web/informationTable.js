import React, { Component } from 'react';

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
              <td>{this.props.info.entropy}</td>
            </tr>
            <tr>
              <td>Redundancy</td>
              <td>{this.props.info.redundancy}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
