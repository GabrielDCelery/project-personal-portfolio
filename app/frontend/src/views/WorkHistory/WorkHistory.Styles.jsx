import React from 'react';

export default function WorkHistoryStyles(ToWrapComponent) {
  let WrapperComponent = props => {
    return (
      <ToWrapComponent
        {...props}
      />
    )
  }

  return WrapperComponent;
}