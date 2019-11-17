import React from 'react';
//import styled from 'styled-components';

export default function AchievmentsStyles(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return WrapperComponent;
}
