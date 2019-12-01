import _ from 'lodash';
import { createSelector } from 'reselect';

const getSkillsItems = state => {
  return _.get(state, ['skills', 'items']);
};

const getVisibilityFilter = state => {
  return _.get(state, ['skills', 'visibilityFilter']);
};

export const selectorGetFilteredSkillsToShow = createSelector(
  [getSkillsItems, getVisibilityFilter],
  (skillsItems, visibilityFilter) => {
    return skillsItems;
  }
);
