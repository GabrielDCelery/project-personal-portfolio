import React from 'react';
import { Side } from './subViews';

export default ({
  stateCubeRotateX,
  stateCubeRotateY,
  stateAnimationDurationInMs,
  actionToggleCubeLighting,
  setRandomTargetPosition,
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
        onClick={() => { setRandomTargetPosition() }}
      >
        <StyledCube
          style={{
            //transitionProperty: 'transform',
            transitionDuration: `${stateAnimationDurationInMs}ms`,
            transform: `rotateX(${stateCubeRotateX}deg) rotateY(${stateCubeRotateY}deg)`
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