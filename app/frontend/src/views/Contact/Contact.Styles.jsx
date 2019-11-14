import React from 'react';

export default function ContactStyles(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return WrapperComponent;
}
