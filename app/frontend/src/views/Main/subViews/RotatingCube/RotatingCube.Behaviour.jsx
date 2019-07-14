import React, { useEffect } from 'react';
import {
  CubeStoreDecorator
} from 'components';

const MAX = 180;
const MIN = -180;
const ANIMATION_MILISECONDS = 3000;
const delay = delay => new Promise(accept => setTimeout(accept, delay));

export default ToWrapComponent => {
  let WrapperComponent = props => {
    const {
      stateRotateX,
      stateRotateY,
      actionSetCubeRotation
    } = props;

    const autoRotate = () => {
      actionSetCubeRotation({
        rotateX: Math.floor(Math.random() * (MAX - MIN + 1) + MIN),
        rotateY: Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
      });
    };

    let interval = null;

    useEffect(() => {
      (async () => {
        await delay(100);
        autoRotate();
        interval = setInterval(autoRotate, ANIMATION_MILISECONDS + 100);
      })();

      return () => { clearInterval(interval) };
    }, []);

    return (
      <ToWrapComponent
        {...props}
        {...{
          stateRotateX,
          stateRotateY,
          ANIMATION_MILISECONDS
        }}
      />
    )
  }

  WrapperComponent = CubeStoreDecorator(WrapperComponent);

  return WrapperComponent;
}