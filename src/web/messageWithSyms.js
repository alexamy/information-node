import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const UniqueSymbol = styled.span`
  color: green;
`;
const OtherSymbol = styled.span`
  color: black;
`;

export class MessageWithSyms extends Component {
  render() {
    return <span>{this.props.message}</span>;
  }
}

MessageWithSyms.propTypes = {
  message: PropTypes.string,
  symbols: PropTypes.arrayOf(PropTypes.string)
};
