import React from 'react';
import styled from 'styled-components';

export default function AchievmentsStyles(ToWrapComponent) {
  const StyledTypography = styled.div`
    width: 100%;
    background: #082431;
    padding: 12px 24px !important;
    color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  `;

  let WrapperComponent = props => {
    return <ToWrapComponent {...props} {...{ StyledTypography }} />;
  };

  return WrapperComponent;
}
