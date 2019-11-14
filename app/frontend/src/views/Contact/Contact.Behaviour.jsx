import React from 'react';
import _ from 'lodash';

export default function ContactBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const getters = {};

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {};

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    return <ToWrapComponent {...{ getter, handler }} />;
  };

  return WrapperComponent;
}
