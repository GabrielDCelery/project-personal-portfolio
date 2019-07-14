import React from 'react';
import {
  CubeStoreDecorator
} from 'components';

export default ToWrapComponent => {
  let WrapperComponent = props => {
    return (
      <ToWrapComponent
        {...props}
      />
    )
  }

  WrapperComponent = CubeStoreDecorator(WrapperComponent);

  return WrapperComponent;
}