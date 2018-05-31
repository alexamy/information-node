import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const View = styled.div`
  margin: 10px 0;
`;
const Header = styled.div`
  border: 1px solid #aaaaaa;
  padding: 0 10px;
  user-select: none;
  cursor: pointer;
  &:hover {
    background: #fafafa;
  }
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
      expanded: props.expanded
    };
    this.contentRef = React.createRef();
    this.changeState = this.changeState.bind(this);
    this.afterTransition = this.afterTransition.bind(this);
  }

  componentDidMount() {
    this.contentRef.current.style.display = this.props.expanded
      ? 'block'
      : 'none';
  }

  changeState(e) {
    e.preventDefault();
    this.contentRef.current.style.display = 'block';
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  afterTransition() {
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

ToggleGroup.propTypes = {
  header: PropTypes.string,
  expanded: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};
