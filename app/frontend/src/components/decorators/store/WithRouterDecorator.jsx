import React from 'react';
import { withRouter } from 'react-router';

export const WithRouterDecorator = ToWrapComponent => {
  return withRouter(props => {
    return <ToWrapComponent {...props} />;
  });
};
