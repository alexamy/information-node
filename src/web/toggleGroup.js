import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const View = styled.div`
  border: 1px solid #aaaaaa;
  border-top-width: ${props => (props.end ? 0 : 1)}px;
  border-bottom-width: ${props => (props.start ? 0 : 1)}px;
  margin: 10px 0;
  margin-top: ${props => (props.inter || props.end ? 0 : 10)}px;
  margin-bottom: ${props => (props.inter || props.start ? 0 : 10)}px;
`;
const Header = styled.div`
  padding: 0 10px;
  user-select: none;
  cursor: pointer;
  background: ${props => (props.expanded ? '#eee' : 'none')};
  &:hover {
    background: ${props => (props.expanded ? '#ddd' : '#eee')};
  }
`;
const Content = styled.div`
  overflow: hidden;
  position: relative;
  padding: 0 10px;
  transform-origin: top;
  transform: scaleY(${props => (props.expanded ? 1 : 0)});
  opacity: ${props => (props.expanded ? 1 : 0)};
  transition: transform 300ms ease-in-out;
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
      <View
        start={this.props.start}
        inter={this.props.inter ? 1 : 0}
        end={this.props.end ? 1 : 0}
        onMouseDown={() => false}
      >
        <Header expanded={this.state.expanded} onClick={this.changeState}>
          {this.props.header}
        </Header>
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
  ]),
  start: PropTypes.bool,
  inter: PropTypes.bool,
  end: PropTypes.bool
};
