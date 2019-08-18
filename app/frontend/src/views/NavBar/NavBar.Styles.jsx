import React from 'react';
import styled from 'styled-components';
import {
  AppBar,
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import config from 'config';

const StyledAppBar = styled(AppBar)`
  margin-left: ${config.styles.layout.navbar.width};
  @media (min-width:600px) {
    width: calc(100% - ${config.styles.layout.navbar.width}) !important;
  }
`;

const StyledDrawerContainer = styled.nav`
  @media (min-width:600px) {
    width: ${config.styles.layout.navbar.width};
    flex-shrink: 0;
  }
`;

const StyledDrawer = styled(Drawer)`
  & .MuiPaper-root {
    width: ${config.styles.layout.navbar.width};
    background-color: ${config.styles.colors.navbar.background.default} !important;
  }
`;

const StyledListItemIcon = styled(ListItemIcon)`
  color: ${config.styles.colors.navbar.text.default} !important;
  transition: all 0.5s ease-in-out;
`;

const StyledListItemText = styled(ListItemText)`
  color: ${config.styles.colors.navbar.text.default} !important;
  transition: all 0.5s ease-in-out;
`;

const StyledListItem = styled(ListItem)`
  border-top: 1px solid ${config.styles.colors.navbar.border.default} !important;
  border-bottom: 1px solid ${config.styles.colors.navbar.border.default} !important;
  background-color: ${config.styles.colors.navbar.background.default} !important;
  transition: all 0.5s ease-in-out !important;
  &:hover {
    background-color: ${config.styles.colors.navbar.background.hover} !important;
    border-color: ${config.styles.colors.navbar.border.hover} !important;
  },
  &:hover ${StyledListItemIcon} {
    color: ${config.styles.colors.navbar.text.hover} !important;
  },
  &:hover ${StyledListItemText} {
    color: ${config.styles.colors.navbar.text.hover} !important;
  }
`;

const StyledIconButton = styled(IconButton)`
  margin-right: 16px !important;
  @media (min-width:600px) {
    display: none !important;
  }
`;

export default function NavBarStyles(ToWrapComponent) {
  let WrapperComponent = props => {
    return (
      <ToWrapComponent
        {...props}
        {...{
          StyledAppBar,
          StyledDrawerContainer,
          StyledDrawer,
          StyledListItem,
          StyledListItemIcon,
          StyledListItemText,
          StyledIconButton
        }}
      />
    )
  }

  return WrapperComponent;
}