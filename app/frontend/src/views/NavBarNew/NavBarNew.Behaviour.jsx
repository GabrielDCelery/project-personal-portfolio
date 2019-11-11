import React, { useCallback } from 'react';
import { WithRouterDecorator } from 'components';
import _ from 'lodash';

export default function NavBarBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const { location, history } = props;

    const getters = {
      activePage: location.pathname
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      navToPage: useCallback(
        setTo => {
          history.push(setTo);
        },
        [history]
      )
    };

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    return <ToWrapComponent {...{ getter, handler }} />;
  };

  WrapperComponent = WithRouterDecorator(WrapperComponent);

  return WrapperComponent;
}
