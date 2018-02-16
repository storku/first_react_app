import React from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

export default class ArticleCreationInput extends React.Component {
  constructor(props) {
    super(props);
    this.extractValue = this.extractValue.bind(this);
  }

  extractValue(e) {
    const newText = e.target.value;
    this.props.onChange(newText);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Create New Article:
            <br />
            <Input
              type="text"
              value={this.props.value}
              onChange={this.extractValue}
            />
          </label>
          <br />
          <br />
          <Button primary type="submit" value="Submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
