import { createSelector } from 'reselect';

const getSkillsItems = state => state.skills.items;
const getVisibilityFilter = state => state.skills.visibilityFilter;

export const selectorGetFilteredSkillsToShowForHexMap = createSelector(
  [getSkillsItems, getVisibilityFilter],
  (skillsItems, visibilityFilter) => {
    return skillsItems;
  }
);
