import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';
import styled from 'styled-components';
import $ from 'jquery';

const View = styled.div`
  user-select: none;
  cursor: pointer;
`;
const Header = styled.div`
  border: 1px solid grey;
  padding: 0 10px;
`;
const Content = styled.div`
  overflow: hidden;
  position: relative;
  border: 1px solid grey;
  border-top: 0;
  padding: 0 10px;
`;

export class ToggleGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.contentRef = React.createRef();
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    this.setState({
      expanded: false,
      height: this.contentRef.current.offsetHeight
    });
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
        <VelocityComponent
          animation={{ height: this.state.expanded ? this.state.height : 0 }}
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
