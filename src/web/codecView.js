import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Codec } from '../codec.js';
import { KeyValueTable } from './keyValueTable.js';
import { ToggleGroup } from './toggleGroup.js';
export class CodecView extends Component {
  render() {
    return (
      <div className="coderInfo">
        <div>Закодированное сообщение:</div>
        <div>{this.props.coded.code(' ')}</div>
        <ToggleGroup header="Коды">
          <KeyValueTable object={this.props.coded.codes} />
        </ToggleGroup>
      </div>
    );
  }
}

CodecView.propTypes = {
  coded: PropTypes.instanceOf(Codec)
};
