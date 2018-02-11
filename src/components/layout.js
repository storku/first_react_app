//Create CSS / Style here!
//You can also import Menu, Sidebar and Header here
//Wrap other pages between <Layout> </Layout>
//reference: https://learnnextjs.com/basics/using-shared-components/the-layout-component
import React, { Component } from 'react'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  something: something,
}

class Layout extends Component {
  <div style={layoutStyle}>
    {this.props.children}
  </div>
}

export default Layout
