import React, { useCallback, useState } from 'react';
import { WithRouterDecorator } from 'components';
import _ from 'lodash';
import config from 'config';

export default function NavBarBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const { location, history } = props;
    const [isMobileOpen, setMobileOpen] = useState(false);

    const getters = {
      navBarItems: _.filter(config.routes, ({ showInNavBar }) => {
        return showInNavBar === true;
      }),
      isActivePage: useCallback(
        pathName => {
          return pathName === location.pathname;
        },
        [location]
      ),
      isMobileOpen
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      navToPage: useCallback(
        setTo => {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
          history.push(setTo);
          setMobileOpen(false);
        },
        [history, setMobileOpen]
      ),
      handleDrawerToggle: useCallback(() => {
        setMobileOpen(!isMobileOpen);
      }, [isMobileOpen, setMobileOpen])
    };

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    return <ToWrapComponent {...{ getter, handler }} />;
  };

  WrapperComponent = WithRouterDecorator(WrapperComponent);

  return WrapperComponent;
}
