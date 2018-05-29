import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  font-size: 24px;
  padding: 0 10px;
  border: 0;
  border-bottom: 1px solid grey;
`;
export class InputForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  render() {
    return (
      <form>
        <Input
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

InputForm.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func
};
