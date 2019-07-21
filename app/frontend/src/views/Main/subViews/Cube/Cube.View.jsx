import React from 'react';

export default ({
  StyledCubePositioner,
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
      <StyledCubePositioner>
        <StyledCubeContainer>
          <StyledCube>
            <StyledCubeSideFront></StyledCubeSideFront>
            <StyledCubeSideBack></StyledCubeSideBack>
            <StyledCubeSideLeft></StyledCubeSideLeft>
            <StyledCubeSideRight></StyledCubeSideRight>
            <StyledCubeSideTop></StyledCubeSideTop>
            <StyledCubeSideBottom></StyledCubeSideBottom>
          </StyledCube>
        </StyledCubeContainer>
      </StyledCubePositioner>
    </React.Fragment>
  );
}