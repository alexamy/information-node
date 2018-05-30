import React, { Component } from 'react';
import styled from 'styled-components';

const View = styled.div`
  user-select: none;
  cursor: pointer;
`;
const Header = styled.div`
  border: 1px solid #aaaaaa;
  padding: 0 10px;
`;
const Content = styled.div`
  overflow: hidden;
  position: relative;
  border: 1px solid #aaaaaa;
  border-top: 0;
  padding: 0 10px;
  transform-origin: top;
  transform: scaleY(${props => (props.expanded ? 1 : 0)});
  opacity: ${props => (props.expanded ? 1 : 0)};
  transition: all 300ms ease-in-out;
`;

export class ToggleGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
    this.speed = 0.2;
    this.contentRef = React.createRef();
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
        <Header>{this.props.header}</Header>
        <Content expanded={this.state.expanded}>{this.props.children}</Content>
      </View>
    );
  }
}
