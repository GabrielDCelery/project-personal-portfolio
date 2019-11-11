import React from 'react';
import { CssBaseline } from '@material-ui/core';
import {
  Home as HomeIcon,
  NoteAdd as NoteAddIcon,
  TabletMac as TabletMacIcon
} from '@material-ui/icons';
import {
  Email as EmailIcon,
  FlightTakeoff as FlightTakeoffIcon,
  GetApp as GetAppIcon,
  Menu as MenuIcon,
  Rowing as RowingIcon,
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
  stateActivePage,
  handleNavToPage
}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <StyledDrawerContainer>
        <StyledDrawer variant="permanent" anchor="left">
          <StyledListItem
            button
            className={`${stateActivePage === '/' ? 'active' : ''}`}
            onClick={() => {
              handleNavToPage('/');
            }}
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
            className={`${stateActivePage === '/addNewMatter' ? 'active' : ''}`}
            onClick={() => {
              handleNavToPage('/addNewMatter');
            }}
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
