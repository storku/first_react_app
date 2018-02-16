import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class ContainerExampleContainer extends Component {
  render() {
    return (
      <Container text style={{ width: '600px' }}>
        {this.props.submittedText}
      </Container>
    );
  }
}

export default ContainerExampleContainer;
