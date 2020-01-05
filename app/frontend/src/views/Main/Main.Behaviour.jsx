import React from 'react';

export default function MainBehaviour(ToWrapComponent) {
  let WrapperComponent = () => {
    return <ToWrapComponent />;
  };

  return WrapperComponent;
}
