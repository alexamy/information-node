import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InformationTable } from './informationTable.js';
import { ToggleGroup } from './toggleGroup.js';
import { CodecView } from './codecView.js';
import { Codec } from '../codec.js';
import { Information } from '../information.js';

export class CodecInfoFragment extends Component {
  render() {
    return (
      <React.Fragment>
        <CodecView coded={this.props.coded} />
        <ToggleGroup header="Информация">
          <InformationTable hideMessage info={this.props.info} />
        </ToggleGroup>
      </React.Fragment>
    );
  }
}

CodecInfoFragment.propTypes = {
  coded: PropTypes.instanceOf(Codec),
  info: PropTypes.instanceOf(Information)
};
