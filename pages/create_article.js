import React, { Component } from 'react';
import { Link, Router } from '../routes';
import ArticleCreationInput from '../src/components/Article_creation_input';
import UIContainer from '../src/components/UI_container';

//create test links
const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(newText) {
    this.setState({
      value: newText
    });
    console.log(newText);
  }

  /*
  //This routing method is from udemy ethereum course
  async handleSubmit(event) {
    let linkText = this.state.value;
    linkText = '/articles/'+linkText
    linkText = linkText.replace(/ /g,'_')
    Router.push(linkText);
    event.preventDefault();
  }
  */

  handleSubmit(event) {
    let linkText = this.state.value;
    let href = `/post?title=${linkText}`;
    let as = linkText.split(' ').join('_');
    as = `/p/${as}`;
    Router.push(href, as);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <UIContainer>
          <ArticleCreationInput
            value={this.state.value}
            submittedText={this.state.submittedText}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <br />
          <h4>Test Links</h4>
          <PostLink id="hello_nextjs" title="Hello Next.js" />
          <PostLink id="bye_bye" title="Bye bye" />
          <PostLink id="test_abc" title="Test ABC" />
        </UIContainer>
      </div>
    );
  }
}

export default CreateArticle;
