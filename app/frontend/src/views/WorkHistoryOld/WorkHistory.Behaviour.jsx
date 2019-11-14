import React from 'react';
import {
  WorkHistoryStoreDecorator
} from 'components';

export default function WorkHistoryBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    return (
      <ToWrapComponent
        {...props}
      />
    )
  }

  WrapperComponent = WorkHistoryStoreDecorator(WrapperComponent);

  return WrapperComponent;
}