import React, { Component } from 'react';
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header
} from 'semantic-ui-react';

//sidebar is imported into the ui_container.js file
class SidebarLeftSlideAlong extends Component {
  state = { visible: true };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Menu Toggle</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="slide along"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical
            inverted
          >
            <Menu.Item name="home">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item name="wikis">
              <Icon name="" />
              Wikis
            </Menu.Item>
            <Menu.Item name="articles">
              <Icon name="" />
              Articles
            </Menu.Item>
            <Menu.Item name="peerReview">
              <Icon name="" />
              Peer Review
            </Menu.Item>
            <Menu.Item name="fansTokens">
              <Icon name="" />
              FANS Tokens
            </Menu.Item>
            <Menu.Item name="faqs">
              <Icon name="" />
              FAQs
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>{this.props.children}</Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default SidebarLeftSlideAlong;
