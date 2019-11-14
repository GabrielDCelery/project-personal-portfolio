import React from 'react';

export default function ResumeStyles(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return WrapperComponent;
}
