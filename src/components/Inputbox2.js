import React from 'react';
import { connect } from 'react-redux';
import { TextArea, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { submitArticle } from '../actions';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(values) {
    this.props.submitArticle(values, this.props.title);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <label>
            Enter Information:
            <br />
            <Field
              label="Article Content"
              name="content"
              component="input"
              type="text"
            />
          </label>
          <br />
          <Button primary type="submit" value="Submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { articles: state.articles };
}

export default reduxForm({
  form: 'articleSubmitForm'
})(connect(mapStateToProps, { submitArticle })(InputBox));
