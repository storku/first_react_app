import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, Router } from '../../routes';
import SearchExampleStandard from './Search_bar';

//menu is imported into the ui_container.js file
export default class MenuExampleMenus extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  //<Link> tags enables client rendering (faster than server side rendering)
  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <Link href="/signup">
          <Menu.Item
            name="signup"
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
          >
            Signup
          </Menu.Item>
        </Link>

        <Link href="/login">
          <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          >
            Login
          </Menu.Item>
        </Link>

        <SearchExampleStandard />

        <Menu.Menu position="right">
          <Link href="/create_article">
            <Menu.Item
              name="createArticle"
              active={activeItem === 'createArticle'}
              onClick={this.handleItemClick}
            >
              Create Article
            </Menu.Item>
          </Link>

          <Link href="/">
            <Menu.Item
              name="/mainPage"
              active={activeItem === 'mainPage'}
              onClick={this.handleItemClick}
            >
              Main Page
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}
