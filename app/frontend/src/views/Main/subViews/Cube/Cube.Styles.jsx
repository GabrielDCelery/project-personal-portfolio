import React from 'react';
import styled from 'styled-components';
import patternImage from 'assets/what-the-hex-dark.png';

const size = 10;

const StyledCubeContainer = styled.div`
  width: ${size}vh;
  height: ${size}vh;
`;

const StyledCubeSide = styled.div`
  width: ${size}vh;
  height: ${size}vh;
  position: absolute;
  box-shadow: 0 0 2vh 1px #1386C1 inset;
  border: 1px solid #1386C1;
  background: #000;
  background-image: url(${patternImage});
  background-repeat: repeat;
`;

const StyledCubeSideFront = styled(StyledCubeSide)`
  transform: rotateY(0deg) translateZ(${0.5 * size}vh);
`;

const StyledCubeSideBack = styled(StyledCubeSide)`
  transform: rotateX(180deg) translateZ(${0.5 * size}vh); 
`;

const StyledCubeSideLeft = styled(StyledCubeSide)`
  transform: rotateY(-90deg) translateZ(${0.5 * size}vh);
`;

const StyledCubeSideRight = styled(StyledCubeSide)`
  transform: rotateY(90deg) translateZ(${0.5 * size}vh);
`;

const StyledCubeSideTop = styled(StyledCubeSide)`
  transform: rotateX(90deg) translateZ(${0.5 * size}vh);
`;

const StyledCubeSideBottom = styled(StyledCubeSide)`
  transform: rotateX(-90deg) translateZ(${0.5 * size}vh);
`;

export default ToWrapComponent => {
  let WrapperComponent = props => {
    const {
      startScale,
      startOffsetX,
      startOffsetY,
      startRotateX,
      startRotateY,
      startZindex
    } = props;

    const StyledCubePositioner = styled.div`
      perspective: 300px;
      perspective-origin: ${startOffsetX < 0 ? 'right': 'left'};
      cursor: pointer;
      position: absolute;
      left: calc(${startOffsetX}%);
      top: calc(${startOffsetY}%);
      transform: scale(${startScale});
      z-index: ${startZindex};
    `;

    const StyledCube = styled.div`
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transform: rotateX(${startRotateX}deg) rotateY(${startRotateY}deg);
    `;

    return (
      <ToWrapComponent
        {...props}
        {...{
          StyledCubePositioner,
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