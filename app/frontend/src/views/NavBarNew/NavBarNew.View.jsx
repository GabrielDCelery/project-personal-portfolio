import React from 'react';
import { CssBaseline } from '@material-ui/core';
import {
  Email as EmailIcon,
  GetApp as GetAppIcon,
  Work as WorkIcon,
  InsertEmoticon as InsertEmoticonIcon,
  Build as BuildIcon
} from '@material-ui/icons';

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
          <StyledListItem
            button
            className={`${getter('activePage') === '/' ? 'active' : ''}`}
            onClick={() => handler('navToPage')('/')}
          >
            <StledListItemGutter />
            <StyledListItemIcon>
              <WorkIcon fontSize="large" />
            </StyledListItemIcon>
            <StyledListItemText primary="WORK HISTORY" />
            <StledListItemGutter />
          </StyledListItem>

          <StyledListItem
            button
            className={`${
              getter('activePage') === '/addNewMatter' ? 'active' : ''
            }`}
            onClick={() => handler('navToPage')('/')}
          >
            <StledListItemGutter />
            <StyledListItemIcon>
              <InsertEmoticonIcon fontSize="large" />
            </StyledListItemIcon>
            <StyledListItemText primary="UNIQUE ACHIEVMENTS" />
            <StledListItemGutter />
          </StyledListItem>

          <StyledListItem button onClick={() => {}}>
            <StledListItemGutter />
            <StyledListItemIcon>
              <BuildIcon fontSize="large" />
            </StyledListItemIcon>
            <StyledListItemText primary="SKILLS" />
            <StledListItemGutter />
          </StyledListItem>

          <StyledListItem button onClick={() => {}}>
            <StledListItemGutter />
            <StyledListItemIcon>
              <GetAppIcon fontSize="large" />
            </StyledListItemIcon>
            <StyledListItemText primary="DOWNLOAD RESUME" />
            <StledListItemGutter />
          </StyledListItem>

          <StyledListItem button onClick={() => {}}>
            <StledListItemGutter />
            <StyledListItemIcon>
              <EmailIcon fontSize="large" />
            </StyledListItemIcon>
            <StyledListItemText primary="CONTACT ME" />
            <StledListItemGutter />
          </StyledListItem>
        </StyledDrawer>
      </StyledDrawerContainer>
    </React.Fragment>
  );
}
