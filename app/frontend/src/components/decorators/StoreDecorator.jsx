import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';

export const StoreDecorator = ToWrapComponent => {
  const WrapperComponent = props => (
    <Provider store={store}>
      <ToWrapComponent {...props} />
    </Provider>
  );

  return WrapperComponent;
};
