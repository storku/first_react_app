import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Link, Router } from '../routes';
import InputBox from '../src/components/inputbox';
import ContainerExampleContainer from '../src/components/text_container';
import UIContainer from '../src/components/ui_container';

//Thinking in React Guide:
//https://reactjs.org/docs/thinking-in-react.html
class App extends Component {
  constructor(props) {
    super(props);
    //If you don’t use something in render(),
    //it shouldn’t be in the state.
    this.state = {
      value: '',
      searchTerm: ''
    };

    //use bind for event handling and
    //any METHODs passed without () after it, such as onChange={this.handleChange}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //use setState to re-render the component
  handleChange(newText) {
    this.setState({
      value: newText
    });
  }

  handleSubmit(event) {
    this.setState({
      submittedText: this.state.value
    });
    event.preventDefault(); //prevents default behavior i.e. page re-loading
  }

  handleSearch(newTerm) {
    this.setState({
      searchTerm: newTerm
    });
  }

  //CSS is a stylesheet link placed in menu.js
  render() {
    return (
      <div>
        <UIContainer>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <InputBox
                  value={this.state.value}
                  submittedText={this.state.submittedText}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                />
              </Grid.Column>
              <Grid.Column>
                <ContainerExampleContainer
                  submittedText={this.state.submittedText}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </UIContainer>
      </div>
    );
  }
}

export default App;
