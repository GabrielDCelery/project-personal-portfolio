import styled from 'styled-components';
import config from 'config';
import { ListItem } from '@material-ui/core';

import NavListItemIcon from './ListItemIcon';
import NavListItemText from './ListItemText';

export const NavListItem = styled(ListItem)`
  height: 8em;
  transition: all 0.4s ease-in-out !important;
  background-color: transparent !important;

  &.MuiListItem-root {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    border-right: 6px solid transparent;
  }

  &:hover,
  &.active {
    background-color: transparent !important;
    border-right: 6px solid ${config.styles.colors.navbar.text.hover};
  }

  &:hover ${NavListItemIcon}, &.active ${NavListItemIcon} {
    color: ${config.styles.colors.navbar.text.hover} !important;
  }

  &:hover ${NavListItemText}, &.active ${NavListItemText} {
    color: ${config.styles.colors.navbar.text.hover} !important;
  }

  .MuiTouchRipple-root {
    display: none;
  }
`;

export default NavListItem;
