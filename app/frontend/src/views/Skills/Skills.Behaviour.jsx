import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';

const hexGridSpiralCoordinates = [
  [0, 0],
  [-1, 0],
  [0, -1],
  [1, -1],
  [1, 0],
  [0, 1],
  [-1, 1],
  [-2, 1],
  [-2, 0],
  [-1, -1],
  [0, -2],
  [1, -2],
  [2, -2],
  [2, -1],
  [2, 0],
  [1, 1],
  [0, 2],
  [-1, 2],
  [-2, 2],
  [-3, 2],
  [-3, 1],
  [-3, 0],
  [-2, -1],
  [-1, -2],
  [0, -3],
  [1, -3],
  [2, -3],
  [3, -3],
  [3, -2],
  [3, -1],
  [3, 0],
  [2, 1],
  [1, 2],
  [0, 3],
  [-1, 3],
  [-2, 3],
  [-3, 3]
];

const getHexRingOffset = totalNumOfHexTiles => {
  if (totalNumOfHexTiles === 0 || totalNumOfHexTiles === 1) {
    return '-10';
  }

  if (1 < totalNumOfHexTiles && totalNumOfHexTiles <= 9) {
    return '-23.3';
  }

  if (9 < totalNumOfHexTiles && totalNumOfHexTiles <= 23) {
    return '-36.7';
  }

  return '-50';
};

export default function SkillsBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionGetSkillsItems,
      actionSetSkillsVisibilityFilter,
      stateFilteredSkillItems,
      stateSkillsVisibilityFilter
    } = props;

    const [hexGridWidth, setHexGridWidth] = useState(0);
    const getters = {
      stateFilteredSkillItems,
      stateSkillsVisibilityFilter,
      layout: {
        hexGrid: {
          width: hexGridWidth || 0,
          height: hexGridWidth || 0
        },
        hexCell: {
          width: 7,
          height: 7
        },
        hexViewBox: useCallback(() => {
          return `-50 ${getHexRingOffset(
            stateFilteredSkillItems.length
          )} 100 100`;
        }, [stateFilteredSkillItems])
      },
      filteredSkillsItemsForGridMap: useCallback(() => {
        const gridMap = [];
        let rowItems = [];

        stateFilteredSkillItems.map((item, index) => {
          rowItems.push(item);

          if (index !== 0 && index % 3 === 2) {
            gridMap.push(rowItems.slice(0));
            rowItems = [];

            return null;
          }

          if (index === stateFilteredSkillItems.length - 1) {
            gridMap.push(rowItems.slice(0));
            rowItems = [];

            return null;
          }

          return null;
        });

        return gridMap;
      }, [stateFilteredSkillItems]),
      hexGridSpiralCoordinates
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
