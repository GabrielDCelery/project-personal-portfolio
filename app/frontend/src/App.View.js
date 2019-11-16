import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
  Achievments,
  Contact,
  NavBar,
  Resume,
  Skills,
  WorkHistory
} from 'views';
import { Hidden } from '@material-ui/core';
import { ComponentVerticalGutter } from 'components';
import './App.css';
import config from 'config';

const Pages = {
  Achievments,
  Contact,
  Resume,
  Skills,
  WorkHistory
};

const ViewWithNavbar = ToWrapComponent => {
  return props => (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div style={{ flexGrow: 1 }}>
        <Hidden smUp>
          <ComponentVerticalGutter height="4em" />
        </Hidden>
        <ToWrapComponent {...props} />
      </div>
    </div>
  );
};

const AppView = () => {
  return (
    <React.Fragment>
      <Route exact path="/">
        <Redirect to={`${config.routes[0].path}`} />
      </Route>
      {config.routes.map(({ page, path }, index) => {
        const Page = Pages[page];

        return (
          <React.Fragment key={`route-${index}`}>
            <Route exact={true} path={path} render={ViewWithNavbar(Page)} />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default AppView;
