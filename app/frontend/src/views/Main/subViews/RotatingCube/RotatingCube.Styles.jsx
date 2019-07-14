import React from 'react';
import styled from 'styled-components';
import patternImage from 'assets/what-the-hex-dark.png';

const StyledCubeContainer = styled.div`
  width: 40vh;
  height: 40vh;
  perspective: 100vh;
  position: relative;
  will-change: transform;
  cursor: pointer;
`;

const StyledCube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
`;

const StyledCubeSide = styled.div`
  width: 40vh;
  height: 40vh;
  display: block;
  position: absolute;
  box-shadow: 0 0 4vh 1px #1386C1 inset;
  border: 2px solid #1386C1;
  background: #000;
  background-image: url(${patternImage});
  background-repeat: repeat;
`;

const StyledCubeSideFront = styled(StyledCubeSide)`
  transform: rotateY(0deg) translateZ(20vh);
`;

const StyledCubeSideBack = styled(StyledCubeSide)`
  transform: rotateX(180deg) translateZ(20vh); 
`;

const StyledCubeSideLeft = styled(StyledCubeSide)`
  transform: rotateY(-90deg) translateZ(20vh);
`;

const StyledCubeSideRight = styled(StyledCubeSide)`
  transform: rotateY(90deg) translateZ(20vh);
`;

const StyledCubeSideTop = styled(StyledCubeSide)`
  transform: rotateX(90deg) translateZ(20vh);
`;

const StyledCubeSideBottom = styled(StyledCubeSide)`
  transform: rotateX(-90deg) translateZ(20vh);
`;

export default ToWrapComponent => {
  let WrapperComponent = props => {
    return (
      <ToWrapComponent
        {...props}
        {...{
          StyledCubeContainer,
          StyledCube,
          StyledCubeSideFront,
          StyledCubeSideBack,
          StyledCubeSideLeft,
          StyledCubeSideRight,
          StyledCubeSideTop,
          StyledCubeSideBottom
        }}
      />
    )
  }

  return WrapperComponent;
}