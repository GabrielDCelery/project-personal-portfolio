import React from 'react';
import { CssBaseline } from '@material-ui/core';
import {
  Email as EmailIcon,
  GetApp as GetAppIcon,
  Work as WorkIcon,
  InsertEmoticon as InsertEmoticonIcon,
  Build as BuildIcon
} from '@material-ui/icons';
import config from 'config';

const NavBarIcons = {
  EmailIcon,
  GetAppIcon,
  WorkIcon,
  InsertEmoticonIcon,
  BuildIcon
};

export default function NavBarView({
  StyledDrawer,
  StyledDrawerContainer,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
  StledListItemGutter,
  getter,
  handler
}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <StyledDrawerContainer>
        <StyledDrawer variant="permanent" anchor="left">
          {config.routes.map(({ path, icon, label }, index) => {
            const Icon = NavBarIcons[icon];

            return (
              <React.Fragment key={`navbar-item-${index}`}>
                <StyledListItem
                  button
                  className={`${getter('isActivePage')(path) ? 'active' : ''}`}
                  onClick={() => handler('navToPage')(path)}
                >
                  <StledListItemGutter />
                  <StyledListItemIcon>
                    <Icon fontSize="large" />
                  </StyledListItemIcon>
                  <StyledListItemText primary={label} />
                  <StledListItemGutter />
                </StyledListItem>
              </React.Fragment>
            );
          })}
        </StyledDrawer>
      </StyledDrawerContainer>
    </React.Fragment>
  );
}
