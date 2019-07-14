import React from 'react';
import { Route } from 'react-router-dom';
import {
  RouterDecorator,
  StoreDecorator
} from 'components';
import {
  Main,
  NavBar
} from 'views';
import 'bootstrap/dist/css/bootstrap.css';

const ViewWithNavbar = ToWrapComponent => {
  return props => (
    <React.Fragment>
      <div style={{ display: 'flex' }}>
        <NavBar />
        <div style={{ flexGrow: 1 }} >
          <ToWrapComponent {...props} />
        </div>
      </div>
    </React.Fragment>
  );
}

let App = () => {
  return (
    <React.Fragment>
      <Route exact={true} path='/' render={ViewWithNavbar(Main)} />
    </React.Fragment>
  );
}

App = RouterDecorator(App);
App = StoreDecorator(App);

export default App;
