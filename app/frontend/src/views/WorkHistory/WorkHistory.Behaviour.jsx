import React, { useEffect, useCallback } from 'react';
import _ from 'lodash';
import { WorkHistoryStoreDecorator } from 'components';

export default function WorkHistoryBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionGetWorkHistoryItems,
      actionToggleWorkHistoryItem,
      stateWorkHistoryItems,
      stateWorkHistoryOpenItems
    } = props;

    const getters = {
      isPanelOpen: useCallback(
        panelId => {
          return stateWorkHistoryOpenItems.includes(panelId);
        },
        [stateWorkHistoryOpenItems]
      ),
      items: stateWorkHistoryItems
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      setExpandedPanel: useCallback(
        panelId => {
          actionToggleWorkHistoryItem(panelId);
        },
        [actionToggleWorkHistoryItem]
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

  WrapperComponent = WorkHistoryStoreDecorator(WrapperComponent);

  return WrapperComponent;
}
