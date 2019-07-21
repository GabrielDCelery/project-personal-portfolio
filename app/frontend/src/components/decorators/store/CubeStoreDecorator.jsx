import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const mapStateToProps = state => {
  return {
    stateCubeRotateX: state.cube.rotateX,
    stateCubeRotateY: state.cube.rotateY,
    stateAnimationDurationInMs: state.cube.animationDurationInMs,
    stateLightingOn: state.cube.bLightingOn,
    stateIsAutoRotateOn: state.cube.bAutoRotateOn,
    stateIsInAnimationMode: state.cube.bInAnimationMode
  }
}

const mapActionsToProps = {
  actionToggleCubeLighting: store.actions.cube.toggleLighting,
  actionToggleCubeAutoRotate: store.actions.cube.toggleAutoRotate,
  actionRotateToPosition: store.actions.cube.rotateToPosition
};

export const CubeStoreDecorator = ToWrapComponent => {
  return connect(mapStateToProps, mapActionsToProps)(props => <ToWrapComponent {...props} />);
}