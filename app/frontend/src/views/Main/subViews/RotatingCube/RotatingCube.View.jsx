import React from 'react';
import { Side } from './subViews';

export default ({
  stateRotateX,
  stateRotateY,
  actionToggleCubeLighting,
  ANIMATION_MILISECONDS,
  StyledCubeContainer,
  StyledCube,
  StyledCubeSideFront,
  StyledCubeSideBack,
  StyledCubeSideLeft,
  StyledCubeSideRight,
  StyledCubeSideTop,
  StyledCubeSideBottom
}) => {
  return (
    <React.Fragment>
      <StyledCubeContainer
        onMouseEnter={() => { actionToggleCubeLighting(true) }}
        onMouseLeave={() => { actionToggleCubeLighting(false) }}
      >
        <StyledCube
          style={{
            transitionProperty: 'transform',
            transitionDuration: `${ANIMATION_MILISECONDS}ms`,
            transform: `rotateX(${stateRotateX}deg) rotateY(${stateRotateY}deg)`
          }}
        >
          <StyledCubeSideFront><Side /></StyledCubeSideFront>
          <StyledCubeSideBack><Side /></StyledCubeSideBack>
          <StyledCubeSideLeft><Side /></StyledCubeSideLeft>
          <StyledCubeSideRight><Side /></StyledCubeSideRight>
          <StyledCubeSideTop><Side /></StyledCubeSideTop>
          <StyledCubeSideBottom><Side /></StyledCubeSideBottom>
        </StyledCube>
      </StyledCubeContainer>
    </React.Fragment>
  );
}