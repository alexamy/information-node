import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  font-size: 24px;
`;
export class InputForm extends Component {
  render() {
    return (
      <form>
        <label>
          <Input
            type="text"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
        </label>
      </form>
    );
  }
}

InputForm.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func
};
