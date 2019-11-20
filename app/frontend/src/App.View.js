import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  Achievments,
  Contact,
  NavBar,
  Resume,
  Skills,
  WorkHistory
} from 'views';
import { Box, Hidden } from '@material-ui/core';
import './App.css';
import config from 'config';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
          <Box height="4em" />
        </Hidden>
        <ToWrapComponent {...props} />
      </div>
    </div>
  );
};

const AppView = ({ location }) => {
  return (
    <React.Fragment>
      <Route exact={true} path="/">
        <Redirect to={`${config.routes[0].path}`} />
      </Route>
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Switch location={location}>
            {config.routes.map(({ page, path }, index) => {
              const Page = Pages[page];

              return (
                <Route
                  key={`route-${index}`}
                  exact={true}
                  path={path}
                  render={ViewWithNavbar(Page)}
                />
              );
            })}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
};

export default AppView;
