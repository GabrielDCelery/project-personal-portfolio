import React from 'react';
import styled from 'styled-components';
import {
  AppBar,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton
} from '@material-ui/core';

const DRAWER_WIDTH = 240;

const StyledAppBar = styled(AppBar)`
  margin-left: ${DRAWER_WIDTH}px;
  @media (min-width:600px) {
    width: calc(100% - ${DRAWER_WIDTH}px) !important;
  }
`;

const StyledDrawerContainer = styled.nav`
  @media (min-width:600px) {
    width: ${DRAWER_WIDTH}px;
    flex-shrink: 0;
  }
`;

const StyledDrawer = styled(Drawer)`
  & .MuiPaper-root {
    width: ${DRAWER_WIDTH}px;
    background-color: #082431 !important;
  }
`;

const StyledListItemIcon = styled(ListItemIcon)`
  color: #aaa !important;
  transition: all 0.5s ease-in-out;
`;

const StyledListItemText = styled(ListItemText)`
  color: #aaa !important;
  transition: all 0.5s ease-in-out;
`;

const StyledListItem = styled(ListItem)`
  border-top: 1px solid #0d3346 !important;
  border-bottom: 1px solid #0d3346 !important;
  background-color: #082431 !important;
  transition: all 0.5s ease-in-out !important;
  &:hover {
    background-color: #2c9fda !important;
    border-color: #46B9F4 !important;
  },
  &:hover ${StyledListItemIcon} {
    color: #fff !important;
  },
  &:hover ${StyledListItemText} {
    color: #fff !important;
  }
`;

const StyledIconButton = styled(IconButton)`
  margin-right: 16px !important;
  @media (min-width:600px) {
    display: none !important;
  }
`;

export default ToWrapComponent => {
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