import React, { useCallback } from 'react';
import {
  CubeStoreDecorator
} from 'components';
import services from 'services';

const ANIMATION_DELAY_FIX = 10;
const MAX = 180;
const MIN = -180;

//const newX = -10
//const newY = 75

export default ToWrapComponent => {
  let WrapperComponent = props => {
    const {
      actionRotateToPosition,
      stateIsInAnimationMode,
      stateAnimationDurationInMs
    } = props;


    const setRandomTargetPosition = useCallback(
      async () => {
        if (stateIsInAnimationMode) {
          return;
        }
        
        await services.delay(ANIMATION_DELAY_FIX);

        return actionRotateToPosition({
          rotateX: Math.floor(Math.random() * (MAX - MIN + 1) + MIN),
          rotateY: Math.floor(Math.random() * (MAX - MIN + 1) + MIN),
          animationDurationInMs: stateAnimationDurationInMs
        });
      },
      [
        actionRotateToPosition,
        stateIsInAnimationMode,
        stateAnimationDurationInMs
      ]
    );

    return (
      <ToWrapComponent
        {...props}
        {...{
          setRandomTargetPosition
        }}
      />
    )
  }

  WrapperComponent = CubeStoreDecorator(WrapperComponent);

  return WrapperComponent;
}