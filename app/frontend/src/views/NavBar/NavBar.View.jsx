import React from 'react';
import { CssBaseline, Hidden, Toolbar } from '@material-ui/core';
import {
  Build as BuildIcon,
  Email as EmailIcon,
  EmojiEvents as EmojiEventsIcon,
  GetApp as GetAppIcon,
  InsertEmoticon as InsertEmoticonIcon,
  Menu as MenuIcon,
  Work as WorkIcon
} from '@material-ui/icons';

import config from 'config';

const NavBarIcons = {
  BuildIcon,
  EmailIcon,
  EmojiEventsIcon,
  GetAppIcon,
  InsertEmoticonIcon,
  WorkIcon
};

const renderDrawrContent = ({
  StyledListItem,
  StyledListItemGutter,
  StyledListItemIcon,
  StyledListItemText,
  getter,
  handler
}) => {
  return (
    <React.Fragment>
      {config.routes.map(({ path, icon, label }, index) => {
        const Icon = NavBarIcons[icon];

        return (
          <React.Fragment key={`navbar-item-${index}`}>
            <StyledListItem
              button
              className={`${getter('isActivePage')(path) ? 'active' : ''}`}
              onClick={() => handler('navToPage')(path)}
            >
              <StyledListItemGutter />
              <StyledListItemIcon>
                <Icon fontSize="large" />
              </StyledListItemIcon>
              <StyledListItemText primary={label} />
              <StyledListItemGutter />
            </StyledListItem>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default function NavBarView({
  StyledAppBar,
  StyledDrawer,
  StyledDrawerContainer,
  StyledIconButton,
  StyledListItem,
  StyledListItemGutter,
  StyledListItemIcon,
  StyledListItemText,
  getter,
  handler
}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Hidden smUp>
        <StyledAppBar position="fixed" color="secondary">
          <Toolbar>
            <StyledIconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={() => {
                handler('handleDrawerToggle')();
              }}
            >
              <MenuIcon />
            </StyledIconButton>
          </Toolbar>
        </StyledAppBar>
      </Hidden>
      <StyledDrawerContainer>
        <Hidden smUp>
          <StyledDrawer
            variant="temporary"
            anchor="left"
            open={getter('isMobileOpen')}
            onClose={() => {
              handler('handleDrawerToggle')();
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {renderDrawrContent({
              StyledListItemGutter,
              StyledListItem,
              StyledListItemIcon,
              StyledListItemText,
              getter,
              handler
            })}
          </StyledDrawer>
        </Hidden>

        <Hidden xsDown>
          <StyledDrawer variant="permanent" anchor="left">
            {renderDrawrContent({
              StyledListItemGutter,
              StyledListItem,
              StyledListItemIcon,
              StyledListItemText,
              getter,
              handler
            })}
          </StyledDrawer>
        </Hidden>
      </StyledDrawerContainer>
    </React.Fragment>
  );
}
