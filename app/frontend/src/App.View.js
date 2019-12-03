import React, { useEffect } from 'react';
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

const AppView = ({ location }) => {
  return (
    <React.Fragment>
      <div style={{ display: 'flex' }}>
        <NavBar />
        <div style={{ flexGrow: 1 }}>
          <Hidden smUp>
            <Box height="5em" />
          </Hidden>
          <div style={{ position: 'relative', width: '100%' }}>
            <Route exact={true} path="/">
              <Redirect to={`${config.routes[0].path}`} />
            </Route>
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location} style={{ position: 'relative' }}>
                  {config.routes.map(({ page, path }, index) => {
                    const Page = Pages[page];

                    return (
                      <Route
                        key={`route-${index}`}
                        exact={true}
                        path={path}
                        render={() => {
                          return (
                            <div
                              style={{ position: 'absolute', top: 0, left: 0 }}
                            >
                              <Page />
                            </div>
                          );
                        }}
                      />
                    );
                  })}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppView;
