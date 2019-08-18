import React from 'react';
import { Route } from 'react-router-dom';
import {
  RouterDecorator,
  StoreDecorator,
  ThemeDecorator
} from 'components';
import {
  NavBar,
  WorkHistory
} from 'views';
import './App.css';

const ViewWithNavbar = ToWrapComponent => {
  return props => (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div style={{ flexGrow: 1 }} >
        <ToWrapComponent {...props} />
      </div>
    </div>
  );
}

let App = () => {
  return (
    <React.Fragment>
      <Route exact={true} path='/' render={ViewWithNavbar(WorkHistory)} />
    </React.Fragment>
  );
}

App = RouterDecorator(App);
App = StoreDecorator(App);
App = ThemeDecorator(App);

export default App;
