import React from 'react';
import { RouterDecorator, StoreDecorator, ThemeDecorator } from 'components';

const AppBehaviour = ToWrapComponent => {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  WrapperComponent = RouterDecorator(WrapperComponent);
  WrapperComponent = StoreDecorator(WrapperComponent);
  WrapperComponent = ThemeDecorator(WrapperComponent);

  return WrapperComponent;
};

export default AppBehaviour;
