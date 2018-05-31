import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Information } from '../information.js';
import { MessageWithSyms } from './messageWithSyms.js';
import { KeyValueTable } from './keyValueTable.js';
import { ToggleGroup } from './toggleGroup.js';

export class InformationTable extends Component {
  render() {
    return (
      <div className="informationTable">
        <table className="table table-sm table-striped table-borderless">
          <tbody>
            {this.props.hideMessage ? (
              false
            ) : (
              <tr>
                <td>Сообщение</td>
                <td>
                  <MessageWithSyms
                    message={this.props.info.message}
                    symbols={this.props.info.symbols}
                  />
                </td>
              </tr>
            )}
            <tr>
              <td>Энтропия</td>
              <td>{this.props.info.entropy.toFixed(8)}</td>
            </tr>
            <tr>
              <td>Максимальная энтропия</td>
              <td>{this.props.info.redunMax.toFixed(8)}</td>
            </tr>
            <tr>
              <td>Избыточность</td>
              <td>{this.props.info.redundancy.toFixed(8)}</td>
            </tr>
          </tbody>
        </table>
        <ToggleGroup header="Вероятности">
          <KeyValueTable object={this.props.info.probabilities} />
        </ToggleGroup>
      </div>
    );
  }
}

InformationTable.propTypes = {
  info: PropTypes.instanceOf(Information),
  hideMessage: PropTypes.bool
};
