import React, { useEffect, useState } from 'react';
import _ from 'lodash';

export default function SkillsBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionGetSkillsItems,
      actionSetSkillsVisibilityFilter,
      stateFilteredSkillsItemsForHexMap,
      stateSkillsVisibilityFilter
    } = props;

    const [hexGridWidth, setHexGridWidth] = useState(0);
    const getters = {
      stateFilteredSkillsItemsForHexMap,
      stateSkillsVisibilityFilter,
      layout: {
        hexGrid: {
          width: hexGridWidth || 0,
          height: hexGridWidth || 0
        },
        hexCell: {
          width: 7,
          height: 7
        }
      }
    };

    const getter = (...paths) => {
      return _.get(getters, paths);
    };

    const handlers = {
      actionSetSkillsVisibilityFilter,
      layout: {
        hexGrid: {
          setWidth: setHexGridWidth
        }
      }
    };

    const handler = (...paths) => {
      return _.get(handlers, paths);
    };

    useEffect(() => {
      actionGetSkillsItems();
    }, [actionGetSkillsItems]);

    return <ToWrapComponent {...{ getter, handler }} />;
  };

  return WrapperComponent;
}
