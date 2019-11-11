import React from 'react';
import styled from 'styled-components';
import config from 'config';
import Color from 'color';
import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

const StyledDrawerContainer = styled.nav`
  width: ${config.styles.layout.navbar.width};
  flex-shrink: 0;
`;

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${config.styles.layout.navbar.width};
    background-color: ${config.styles.colors.navbar.background
      .default} !important;
    background: linear-gradient(
      180deg,
      ${Color(config.styles.colors.navbar.background.default)
          .lighten(0)
          .hex()}
        0%,
      ${Color(config.styles.colors.navbar.background.default)
          .lighten(1)
          .hex()}
        50%,
      ${Color(config.styles.colors.navbar.background.default)
          .lighten(0)
          .hex()}
        100%
    ) !important;
    border-right: 3px solid #000;
  }
`;

const StledListItemGutter = styled.div`
  flex-grow: 1;
`;

const StyledListItemIcon = styled(ListItemIcon)`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${config.styles.colors.navbar.text.default} !important;
  transition: all 0.4s ease-in-out;
`;

const StyledListItemText = styled(ListItemText)`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${config.styles.colors.navbar.text.default} !important;
  text-align: center;
  transition: all 0.4s ease-in-out;

  .MuiTypography-root {
    font-weight: bold;
  }
`;

const StyledListItem = styled(ListItem)`
  height: 8em;
  transition: all 0.4s ease-in-out !important;
  background-color: transparent !important;

  &.MuiListItem-root {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    border-right: 8px solid transparent;
  }

  &:hover,
  &.active {
    background-color: transparent !important;
    border-right: 8px solid ${config.styles.colors.navbar.text.hover};
  }

  &:hover ${StyledListItemIcon}, &.active ${StyledListItemIcon} {
    color: ${config.styles.colors.navbar.text.hover} !important;
  }

  &:hover ${StyledListItemText}, &.active ${StyledListItemText} {
    color: ${config.styles.colors.navbar.text.hover} !important;
  }

  .MuiTouchRipple-root {
    display: none;
  }
`;

export default function NavBarStyles(ToWrapComponent) {
  let WrapperComponent = props => {
    return (
      <ToWrapComponent
        {...props}
        {...{
          StyledDrawer,
          StyledDrawerContainer,
          StyledListItem,
          StyledListItemIcon,
          StyledListItemText,
          StledListItemGutter
        }}
      />
    );
  };

  return WrapperComponent;
}
