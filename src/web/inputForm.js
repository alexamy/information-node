import React, { Component } from 'react';

export class InputForm extends Component {
  render() {
    return (
      <form>
        <label>
          <div>Message:</div>
          <input
            type="text"
            value={this.props.message}
            onChange={this.props.handleChange}
          />
        </label>
      </form>
    );
  }
}
