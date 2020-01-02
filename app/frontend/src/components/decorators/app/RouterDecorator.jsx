import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const RouterDecorator = ToWrapComponent => {
  const WrapperComponent = props => (
    <Router>
      <ToWrapComponent {...props} />
    </Router>
  );

  return WrapperComponent;
};
