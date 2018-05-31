import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UniqueSymbol = styled.span`
  color: red;
`;
const OtherSymbol = styled.span`
  color: black;
`;

export class MessageWithSyms extends Component {
  render() {
    const chars = Array.from(this.props.message);
    const syms = Array.from(this.props.symbols);

    const els = chars.map((ch, i) => {
      const isFirstUnique = syms.findIndex(e => e === ch);
      const renderEl =
        isFirstUnique > -1 ? (
          <UniqueSymbol key={i}>{ch}</UniqueSymbol>
        ) : (
          <OtherSymbol key={i}>{ch}</OtherSymbol>
        );
      isFirstUnique > -1 && syms.shift();
      return renderEl;
    });

    return <React.Fragment>{els}</React.Fragment>;
  }
}

MessageWithSyms.propTypes = {
  message: PropTypes.string,
  symbols: PropTypes.arrayOf(PropTypes.string)
};
