import _ from 'lodash';
import { createSelector } from 'reselect';
import config from 'config';
import Color from 'color';

const getSkillsItems = state => state.skills.items;
const getVisibilityFilter = state => state.skills.visibilityFilter;

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

const getMinMaxLevel = _.over([
  skillsItems => {
    const { level } = _.minBy(skillsItems, skillsItem => {
      return skillsItem.level;
    });

    return level;
  },
  skillsItems => {
    const { level } = _.maxBy(skillsItems, skillsItem => {
      return skillsItem.level;
    });

    return level;
  }
]);

const getLevelToColorMap = ({
  maxLevel,
  maxLevelColor,
  minLevel,
  minLevelColor
}) => {
  const [minLevelR, minLevelG, minLevelB] = Color(minLevelColor)
    .rgb()
    .array();
  const [maxLevelR, maxLevelG, maxLevelB] = Color(maxLevelColor)
    .rgb()
    .array();
  const numOfLevels = maxLevel - minLevel + 1;

  const levelToColorMap = {};

  _.times(numOfLevels, index => {
    levelToColorMap[minLevel + index] = Color({
      r: Math.round(
        minLevelR + (index * (maxLevelR - minLevelR)) / numOfLevels
      ),
      g: Math.round(
        minLevelG + (index * (maxLevelG - minLevelG)) / numOfLevels
      ),
      b: Math.round(minLevelB + (index * (maxLevelB - minLevelB)) / numOfLevels)
    }).hex();
  });

  return levelToColorMap;
};

export const selectorGetFilteredSkillsToShowForHexMap = createSelector(
  [getSkillsItems, getVisibilityFilter],
  (skillsItems, visibilityFilter) => {
    if (skillsItems.length === 0) {
      return [];
    }

    const [minLevel, maxLevel] = getMinMaxLevel(skillsItems);
    const levelToColorMap = getLevelToColorMap({
      maxLevel,
      maxLevelColor: config.styles.colors.tertiary,
      minLevel,
      minLevelColor: config.styles.colors.primary
    });

    return _.chain(skillsItems)
      .filter(skillsItem => {
        return _.chain(skillsItem.label)
          .toLower()
          .includes(_.toLower(visibilityFilter))
          .value();
      })
      .orderBy(['level'], ['desc'])
      .map((skillsItem, index) => {
        const [hexX, hexY] = hexGridSpiralCoordinates[index];
        const { label, level } = skillsItem;

        return {
          label,
          hexX,
          hexY,
          bgColor: levelToColorMap[level]
        };
      })
      .value();
  }
);
