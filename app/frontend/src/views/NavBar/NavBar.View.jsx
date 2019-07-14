import React, { useState } from 'react';
import {
  CssBaseline,
  Hidden,
  List,
  Toolbar
} from '@material-ui/core';
import {
  GetApp as GetAppIcon,
  Work as WorkIcon,
  Email as EmailIcon,
  Rowing as RowingIcon,
  FlightTakeoff as FlightTakeoffIcon,
  Menu as MenuIcon
} from '@material-ui/icons';

export default ({
  container,
  StyledAppBar,
  StyledDrawerContainer,
  StyledDrawer,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
  StyledIconButton,
  actionToggleCubeLighting
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <List>
      <StyledListItem button
        onMouseEnter={() => { actionToggleCubeLighting(true) }}
        onMouseLeave={() => { actionToggleCubeLighting(false) }}
      >
        <StyledListItemIcon><WorkIcon /></StyledListItemIcon>
        <StyledListItemText primary="Work History" />
      </StyledListItem>

      <StyledListItem button
        onMouseEnter={() => { actionToggleCubeLighting(true) }}
        onMouseLeave={() => { actionToggleCubeLighting(false) }}
      >
        <StyledListItemIcon><FlightTakeoffIcon /></StyledListItemIcon>
        <StyledListItemText primary="Unique Achievments" />
      </StyledListItem>

      <StyledListItem button
        onMouseEnter={() => { actionToggleCubeLighting(true) }}
        onMouseLeave={() => { actionToggleCubeLighting(false) }}
      >
        <StyledListItemIcon><RowingIcon /></StyledListItemIcon>
        <StyledListItemText primary="Skills" />
      </StyledListItem>

      <StyledListItem button
        onMouseEnter={() => { actionToggleCubeLighting(true) }}
        onMouseLeave={() => { actionToggleCubeLighting(false) }}
      >
        <StyledListItemIcon><GetAppIcon /></StyledListItemIcon>
        <StyledListItemText primary="Download Resume" />
      </StyledListItem>

      <StyledListItem button
        onMouseEnter={() => { actionToggleCubeLighting(true) }}
        onMouseLeave={() => { actionToggleCubeLighting(false) }}
      >
        <StyledListItemIcon><EmailIcon /></StyledListItemIcon>
        <StyledListItemText primary="Contact" />
      </StyledListItem>
    </List>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Hidden smUp implementation="css">
        <StyledAppBar position="fixed">
          <Toolbar>
            <StyledIconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </StyledIconButton>
          </Toolbar>
        </StyledAppBar>
      </Hidden>
      <StyledDrawerContainer>
        <Hidden smUp implementation="css">
          <StyledDrawer
            container={container}
            variant="temporary"
            anchor={"left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </StyledDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <StyledDrawer
            variant="permanent"
            open
          >
            {drawer}
          </StyledDrawer>
        </Hidden>
      </StyledDrawerContainer>

    </React.Fragment>
  );
}