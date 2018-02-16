import React, { Component } from 'react';
import MenuExampleMenus from './Menu';
import SidebarLeftPush from './Sidebarleftpush';

//currently contains sidebarleftpush.js, menu.js
class UIContainer extends Component {
  render() {
    return (
      <div>
        <MenuExampleMenus />
        <SidebarLeftPush>{this.props.children}</SidebarLeftPush>
      </div>
    );
  }
}

export default UIContainer;
