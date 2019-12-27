import React, { useEffect, useCallback } from 'react';
import _ from 'lodash';

export default function WorkHistoryBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionCloseAllWorkHistoryItems,
      actionGetWorkHistoryItems,
      actionToggleWorkHistoryItem,
      actionToggleWorkHistoryProjectItem,
      stateWorkHistoryItems,
      stateWorkHistoryOpenItems,
      stateWorkHistoryProjectOpenItems
    } = props;

    const getters = {
      isAnyWorkHistoryPanelOpen: useCallback(() => {
        return stateWorkHistoryOpenItems.length > 0;
      }, [stateWorkHistoryOpenItems]),
      isWorkHistoryPanelOpen: useCallback(
        panelId => {
          return stateWorkHistoryOpenItems.includes(panelId);
        },
        [stateWorkHistoryOpenItems]
      ),
      isProjectPanelOpen: useCallback(
        panelId => {
          return stateWorkHistoryProjectOpenItems.includes(panelId);
        },
        [stateWorkHistoryProjectOpenItems]
      ),
      workHistoryItems: stateWorkHistoryItems
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      closeAllWorkHistoryItems: useCallback(() => {
        actionCloseAllWorkHistoryItems();
      }, [actionCloseAllWorkHistoryItems]),
      setExpandedWorkItemPanel: useCallback(
        panelId => {
          actionToggleWorkHistoryItem(panelId);
        },
        [actionToggleWorkHistoryItem]
      ),
      setExpandedProjectPanel: useCallback(
        panelId => {
          actionToggleWorkHistoryProjectItem(panelId);
        },
        [actionToggleWorkHistoryProjectItem]
      )
    };

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    useEffect(() => {
      actionGetWorkHistoryItems();
    }, [actionGetWorkHistoryItems]);

    return <ToWrapComponent {...{ getter, handler }} />;
  };

  return WrapperComponent;
}
