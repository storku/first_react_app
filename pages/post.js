import React, { Component } from 'react';
import UIContainer from '../src/components/UI_container';
import InputBox from '../src/components/Inputbox2';
import { connect } from 'react-redux';
import { submitArticle } from '../src/actions';
import Layout from '../src/components/Layout';
import ArticlesList from '../src/components/Articles_list';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pageTitle = this.props.url.query.title;

    return (
      <Layout>
        <UIContainer>
          <h1>{pageTitle}</h1>
          <InputBox title={pageTitle} />
          <ArticlesList />
        </UIContainer>
      </Layout>
    );
  }
}

export default Post;
