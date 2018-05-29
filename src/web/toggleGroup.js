import React, { Component } from 'react';
import VelocityComponent from 'velocity-react';
import styled from 'styled-components';

const View = styled.div`
  user-select: none;
`;
const Header = styled.div``;
const Content = styled.div``;

export class ToggleGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(e) {
    e.preventDefault();
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  render() {
    return (
      <View onClick={this.changeState} onMouseDown={() => false}>
        <Header>Example</Header>
        <Content>Example</Content>
      </View>
    );
  }
}
