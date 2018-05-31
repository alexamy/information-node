import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Codec } from '../codec.js';

export class CodecView extends Component {
  render() {
    return (
      <table>
        <tbody>hi</tbody>
      </table>
    );
  }
}

CodecView.propTypes = {
  coded: PropTypes.instanceOf(Codec)
};
