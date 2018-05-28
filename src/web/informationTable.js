import React, { Component } from 'react';

export class InformationTable extends Component {
  constructor(props) {
    super(props);
    this.rows = [];
    for (let key in props.info) {
      this.rows.push(
        <tr key={key}>
          <td>{key}</td>
          <td>{JSON.stringify(this.props.info[key])}</td>
        </tr>
      );
    }
  }
  render() {
    return (
      <div className="informationTable">
        <table>
          <tbody>{this.rows}</tbody>
        </table>
      </div>
    );
  }
}
