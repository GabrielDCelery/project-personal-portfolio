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
import { ComponentScrolltopButton } from 'components';
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
        <div style={{ flexGrow: 1, position: 'relative' }}>
          <Hidden smUp>
            <Box height="5em" />
          </Hidden>
          <div style={{ position: 'relative', width: '100%' }}>
            <Route exact={true} path="/">
              <Redirect to={`${config.routes[0].path}`} />
            </Route>
            <TransitionGroup>
              <CSSTransition
                /*key={location.key}*/ timeout={300}
                classNames="fade"
              >
                <Switch location={location}>
                  {config.routes.map(({ page, path }, index) => {
                    const Page = Pages[page];

                    return (
                      <Route
                        key={`route-${index}`}
                        exact={true}
                        path={path}
                        render={() => {
                          return <Page />;
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
