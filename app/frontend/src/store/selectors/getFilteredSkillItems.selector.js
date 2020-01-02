import _ from 'lodash';
import { createSelector } from 'reselect';
import config from 'config';
import Color from 'color';

const getSkillsItems = state => state.skills.items;
const getVisibilityFilter = state => state.skills.visibilityFilter;

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

export const selectorGetFilteredSkillItems = createSelector(
  [getSkillsItems, getVisibilityFilter],
  (skillsItems, visibilityFilter) => {
    if (skillsItems.length === 0) {
      return [];
    }

    const [minLevel, maxLevel] = getMinMaxLevel(skillsItems);
    const levelToColorMap = getLevelToColorMap({
      maxLevel,
      maxLevelColor: config.styles.colors.lightYellow,
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
      .map(skillsItem => {
        const { label, level } = skillsItem;

        return {
          label,
          bgColor: levelToColorMap[level]
        };
      })
      .value();
  }
);
