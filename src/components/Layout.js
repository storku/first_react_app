//Create CSS / Style here!
//You can also import Menu, Sidebar and Header here
//Wrap other pages between <Layout> </Layout>
//reference: https://learnnextjs.com/basics/using-shared-components/the-layout-component
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import promise from 'redux-promise';
import throttle from 'lodash/throttle';

import reducers from '../reducers';
import { loadState, saveState } from '../reducers/localStorage';

//persist state through refresh
const persistedState = loadState();
//this is the redux store
const store = createStore(reducers, persistedState, applyMiddleware());

//throttle from lodash makes it call at most once every 1000ms (1 second)
store.subscribe(
  throttle(() => {
    saveState({
      articles: store.getState().articles
    });
  }, 1000)
);

const layoutStyle = {
  margin: 10,
  padding: 10,
  border: '1px solid #DDD'
};

//Provider is a react component that can read redux store
//anytime redux store produces new state, Provider informs
//all of its children components and updates them
class Layout extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={layoutStyle}>{this.props.children}</div>
      </Provider>
    );
  }
}

export default Layout;
