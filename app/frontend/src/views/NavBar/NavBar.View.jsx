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
import NavAppBar from 'components/Nav/AppBar';
import NavDrawer from 'components/Nav/Drawer';
import NavDrawerContainer from 'components/Nav/DrawerContainer';
import NavListItemGutter from 'components/Nav/ListItemGutter';
import NavListItem from 'components/Nav/ListItem';
import NavListItemIcon from 'components/Nav/ListItemIcon';
import NavListItemText from 'components/Nav/ListItemText';
import NavIconButton from 'components/Nav/IconButton';

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
  NavListItem,
  NavListItemIcon,
  NavListItemText,
  getter,
  handler
}) => {
  return (
    <React.Fragment>
      {config.routes.map(({ path, icon, label }, index) => {
        const Icon = NavBarIcons[icon];

        return (
          <React.Fragment key={`navbar-item-${index}`}>
            <NavListItem
              button
              className={`${getter('isActivePage')(path) ? 'active' : ''}`}
              onClick={() => handler('navToPage')(path)}
            >
              <NavListItemGutter />
              <NavListItemIcon>
                <Icon fontSize="large" />
              </NavListItemIcon>
              <NavListItemText primary={label} />
              <NavListItemGutter />
            </NavListItem>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default function NavBarView({ getter, handler }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Hidden smUp>
        <NavAppBar position="fixed" color="secondary">
          <Toolbar>
            <NavIconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={() => {
                handler('handleDrawerToggle')();
              }}
            >
              <MenuIcon />
            </NavIconButton>
          </Toolbar>
        </NavAppBar>
      </Hidden>
      <NavDrawerContainer>
        <Hidden smUp>
          <NavDrawer
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
              NavListItemGutter,
              NavListItem,
              NavListItemIcon,
              NavListItemText,
              getter,
              handler
            })}
          </NavDrawer>
        </Hidden>

        <Hidden xsDown>
          <NavDrawer variant="permanent" anchor="left">
            {renderDrawrContent({
              NavListItemGutter,
              NavListItem,
              NavListItemIcon,
              NavListItemText,
              getter,
              handler
            })}
          </NavDrawer>
        </Hidden>
      </NavDrawerContainer>
    </React.Fragment>
  );
}
