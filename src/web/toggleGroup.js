import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';
import styled from 'styled-components';
import $ from 'jquery';

const View = styled.div`
  user-select: none;
`;
const Header = styled.div``;
const Content = styled.div`
  overflow: hidden;
  position: relative;
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
      height: $(this.contentRef.current).height()
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
        <Header>Example</Header>
        <VelocityComponent
          animation={{ height: this.state.expanded ? this.state.height : 0 }}
          duration={500}
        >
          <Content>
            <div ref={this.contentRef}>Example</div>
          </Content>
        </VelocityComponent>
      </View>
    );
  }
}
