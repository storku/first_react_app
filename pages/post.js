import React, { Component } from 'react';
import UIContainer from '../src/components/UI_container';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UIContainer>
        <h1>{this.props.url.query.title}</h1>
        <p>This is the blog post content.</p>
      </UIContainer>
    );
  }
}

export default Post;
