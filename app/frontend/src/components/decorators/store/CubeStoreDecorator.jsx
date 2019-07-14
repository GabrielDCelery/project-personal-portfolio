import React from 'react';
import { connect } from 'react-redux';
import store from 'store';

const mapStateToProps = state => {
  return {
    stateRotateX: state.cube.rotateX,
    stateRotateY: state.cube.rotateY,
    stateLightingOn: state.cube.bLightingOn
  }
}

const mapActionsToProps = {
  actionSetCubeRotation: store.actions.cube.setRotation,
  actionToggleCubeLighting: store.actions.cube.toggleLighting
};

export const CubeStoreDecorator = ToWrapComponent => {
  return connect(mapStateToProps, mapActionsToProps)(props => <ToWrapComponent {...props} />);
}