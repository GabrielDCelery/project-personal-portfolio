import React from 'react';
import { Route } from 'react-router-dom';
import { NavBarNew, WorkHistory } from 'views';
import './App.css';

const ViewWithNavbar = ToWrapComponent => {
  return props => (
    <div style={{ display: 'flex' }}>
      <NavBarNew />
      <div style={{ flexGrow: 1 }}>
        <ToWrapComponent {...props} />
      </div>
    </div>
  );
};

const AppView = () => {
  return (
    <React.Fragment>
      <Route exact={true} path="/" render={ViewWithNavbar(WorkHistory)} />
    </React.Fragment>
  );
};

export default AppView;
