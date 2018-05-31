import React, { Component } from 'react';
import styled from 'styled-components';

import { InformationTable } from './informationTable.js';
import { InputForm } from './inputForm.js';
import { ToggleGroup } from './toggleGroup.js';
import { CodecView } from './codecView.js';
import { CodecInfoFragment } from './codecInfoFragment.js';

import { Information } from '../information.js';
import {
  Codec,
  EqualBinaryCodes,
  ShannonCodes,
  HoffmanCodes
} from '../codec.js';
import { AntiJamD3Codec, AntiJamD4Codec } from '../antijamCodec.js';

const AppView = styled.div`
  font-size: 24px;
  padding: 1%;
`;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.updateState('поле полное полыни выпало полоть полине', true);
  }

  updateState(message, isConstructor = false) {
    const coded = {
      equalBinary: new Codec(message, EqualBinaryCodes),
      shannon: new Codec(message, ShannonCodes),
      hoffman: new Codec(message, HoffmanCodes),
      antijamD3: new Codec(message, AntiJamD3Codec),
      antijamD4: new Codec(message, AntiJamD4Codec)
    };
    const state = {
      message,
      coded,
      infos: {
        alphabetically: new Information(message),
        equalBinary: new Information(coded.equalBinary.messageCoded),
        shannon: new Information(coded.shannon.messageCoded),
        hoffman: new Information(coded.hoffman.messageCoded),
        antijamD3: new Information(coded.antijamD3.messageCoded),
        antijamD4: new Information(coded.antijamD4.messageCoded)
      }
    };
    isConstructor ? (this.state = state) : this.setState(state);
  }

  handleChange(event) {
    // const prepare = message =>
    //   message
    //     .toLowerCase()
    //     .replace(/[^ а-я]/g, "")
    //     .trim();
    const message = event.target.value;
    this.updateState(message);
  }

  render() {
    return (
      <AppView className="container App">
        <InputForm
          value={this.state.message}
          handleChange={this.handleChange}
        />
        <ToggleGroup header="Буквенное кодирование">
          <InformationTable info={this.state.infos.alphabetically} />
        </ToggleGroup>
        <ToggleGroup header="Равномерный двоичный код">
          <CodecInfoFragment
            coded={this.state.coded.equalBinary}
            info={this.state.infos.equalBinary}
          />
        </ToggleGroup>
        <ToggleGroup header="Код Шеннона-Фано">
          <CodecInfoFragment
            coded={this.state.coded.shannon}
            info={this.state.infos.shannon}
          />
        </ToggleGroup>
        <ToggleGroup header="Код Хаффмана">
          <CodecInfoFragment
            coded={this.state.coded.hoffman}
            info={this.state.infos.hoffman}
          />
        </ToggleGroup>
        <ToggleGroup header="Код Хемминга с d = 3 для РДК">
          <CodecInfoFragment
            coded={this.state.coded.antijamD3}
            info={this.state.infos.antijamD3}
          />
        </ToggleGroup>
        <ToggleGroup header="Код Хемминга с d = 4 для РДК">
          <CodecInfoFragment
            coded={this.state.coded.antijamD4}
            info={this.state.infos.antijamD4}
          />
        </ToggleGroup>
      </AppView>
    );
  }
}
