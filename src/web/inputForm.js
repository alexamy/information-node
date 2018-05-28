import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

InputForm.propTypes = {
  message: PropTypes.string,
  handleChange: PropTypes.func
};
