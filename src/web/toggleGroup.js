import React, { Component } from 'react';
import styled from 'styled-components';

const View = styled.div``;
const Header = styled.div`
  border: 1px solid #aaaaaa;
  padding: 0 10px;
  user-select: none;
  cursor: pointer;
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
    this.afterTransition = this.afterTransition.bind(this);
  }

  changeState(e) {
    e.preventDefault();
    this.updateDisplay();
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  updateDisplay() {
    if (!this.state.expanded) {
      this.contentRef.current.style.display = 'block';
    }
  }

  afterTransition(e) {
    if (!this.state.expanded) {
      this.contentRef.current.style.display = 'none';
    }
  }

  render() {
    return (
      <View onMouseDown={() => false}>
        <Header onClick={this.changeState}>{this.props.header}</Header>
        <Content
          onTransitionEnd={this.afterTransition}
          expanded={this.state.expanded}
        >
          <div ref={this.contentRef}>{this.props.children}</div>
        </Content>
      </View>
    );
  }
}
