import React, { useEffect, useCallback } from 'react';
import _ from 'lodash';

export default function AchievmentsBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionGetCompetitionItems,
      actionToggleCompetitionItem,
      stateCompetitionItems,
      stateCompetitionOpenItems
    } = props;

    const getters = {
      isPanelOpen: useCallback(
        panelId => {
          return stateCompetitionOpenItems.includes(panelId);
        },
        [stateCompetitionOpenItems]
      ),
      items: stateCompetitionItems
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      setExpandedPanel: useCallback(
        panelId => {
          actionToggleCompetitionItem(panelId);
        },
        [actionToggleCompetitionItem]
      )
    };

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    useEffect(() => {
      actionGetCompetitionItems();
    }, [actionGetCompetitionItems]);

    return <ToWrapComponent {...{ getter, handler }} />;
  };

  return WrapperComponent;
}
