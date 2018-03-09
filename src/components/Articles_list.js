import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextArea, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

class ArticlesList extends Component {
  renderPosts() {
    return _.map(this.props.articles, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <h3>{post.id}</h3>
          <p>{post.content}</p>
        </li>
      );
    });
  }

  render() {
    console.log('Props: ', this.props.articles);
    return (
      <div>
        <h3>Articles</h3>
        {this.renderPosts()}
      </div>
    );
  }
}
//Figure out what [object Object] is !!!!!!!
function mapStateToProps(state) {
  console.log('State: ', state);
  return { articles: state.articles };
}

export default connect(mapStateToProps)(ArticlesList);
