import React, { useState, useCallback } from 'react';
import _ from 'lodash';

export default function WorkHistoryBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const [expandedPanel, setExpandedPanel] = useState('panel1');

    const getters = {
      expandedPanel,
      isPanelOpen: useCallback(
        panelName => {
          return panelName === expandedPanel;
        },
        [expandedPanel]
      )
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      setExpandedPanel: useCallback(
        panelName => {
          const newExpandedPanel =
            panelName === expandedPanel ? null : panelName;

          setExpandedPanel(newExpandedPanel);
        },
        [expandedPanel, setExpandedPanel]
      )
    };

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    return <ToWrapComponent {...{ getter, handler }} />;
  };

  return WrapperComponent;
}
