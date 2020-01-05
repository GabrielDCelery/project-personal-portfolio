import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Achievments,
  Contact,
  Main,
  Nav,
  Resume,
  Skills,
  WorkHistory
} from 'views';

import { Box, Hidden } from '@material-ui/core';
import './App.css';
import config from 'config';

const Pages = {
  Achievments,
  Contact,
  Main,
  Resume,
  Skills,
  WorkHistory
};

const AppView = ({ location }) => {
  return (
    <Box display="flex">
      <Nav />
      <Box position="relative" flexGrow={1}>
        <Hidden smUp>
          <Box height="5em" />
        </Hidden>
        <Box position="relative" width="100%">
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
        </Box>
      </Box>
    </Box>
  );
};

export default AppView;
