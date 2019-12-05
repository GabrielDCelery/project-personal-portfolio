import React, { useEffect, useState, useCallback } from 'react';
import _ from 'lodash';

const numOfHexIconsInRangeMap = [1, 6, 12, 18, 24];

const getSlice = ({
  numOfHexIcons,
  numOfIconsAlreadyTraversed,
  sliceIamIn
}) => {
  const numOfIconsInSliceIamIn = numOfHexIconsInRangeMap[sliceIamIn];
  const shouldIGoToNextSlice =
    numOfIconsAlreadyTraversed + numOfIconsInSliceIamIn <= numOfHexIcons;

  if (!shouldIGoToNextSlice) {
    return sliceIamIn;
  }

  return getSlice({
    numOfHexIcons,
    numOfIconsAlreadyTraversed:
      numOfIconsAlreadyTraversed + numOfIconsInSliceIamIn,
    sliceIamIn: sliceIamIn + 1
  });
};

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
