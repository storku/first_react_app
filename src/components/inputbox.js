import React from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';

class InputBox extends React.Component {
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
            Enter Information:
            <br />
            <TextArea
              type="text"
              rows={20}
              cols="70"
              value={this.props.value}
              onChange={this.extractValue}
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

export default InputBox;
