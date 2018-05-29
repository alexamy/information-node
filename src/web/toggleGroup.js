import React, { Component } from 'react';
import { VelocityComponent, velocityHelpers } from 'velocity-react';
import 'velocity-animate/velocity.ui';
import styled from 'styled-components';
import $ from 'jquery';

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

  componentDidMount() {
    const height = $(this.contentRef.current).height();
    this.setState({
      expanded: false,
      height
    });
    this.hideAnim = velocityHelpers.registerEffect({
      calls: [[{ height: 0, borderBottomColor: '#ffffff' }]]
    });
  }

  changeState(e) {
    e.preventDefault();
    const height = this.contentRef.current.offsetHeight;
    this.showAnim = velocityHelpers.registerEffect({
      calls: [[{ height, borderBottomColor: '#aaaaaa' }]],
      reset: { height: '100%' }
    });

    this.setState(prevState => ({
      expanded: !prevState.expanded,
      height
    }));
  }

  render() {
    return (
      <View onClick={this.changeState} onMouseDown={() => false}>
        <Header>{this.props.header}</Header>
        <VelocityComponent
          animation={this.state.expanded ? this.showAnim : this.hideAnim}
          duration={500}
        >
          <Content>
            <div ref={this.contentRef}>{this.props.children}</div>
          </Content>
        </VelocityComponent>
      </View>
    );
  }
}
