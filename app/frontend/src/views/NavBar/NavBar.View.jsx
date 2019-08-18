import React from 'react';
import {
  CssBaseline,
  Hidden,
  List,
  Toolbar
} from '@material-ui/core';
import {
  Email as EmailIcon,
  FlightTakeoff as FlightTakeoffIcon,
  GetApp as GetAppIcon,
  Menu as MenuIcon,
  Rowing as RowingIcon,
  Work as WorkIcon
} from '@material-ui/icons';

export default function NavBarView({
  handleDrawerToggle,
  isMobileOpen,
  StyledAppBar,
  StyledDrawer,
  StyledDrawerContainer,
  StyledIconButton,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText
}) {
  const drawer = (
    <List>
      <StyledListItem button>
        <StyledListItemIcon><WorkIcon /></StyledListItemIcon>
        <StyledListItemText primary="Work History" />
      </StyledListItem>

      <StyledListItem button>
        <StyledListItemIcon><FlightTakeoffIcon /></StyledListItemIcon>
        <StyledListItemText primary="Unique Achievments" />
      </StyledListItem>

      <StyledListItem button >
        <StyledListItemIcon><RowingIcon /></StyledListItemIcon>
        <StyledListItemText primary="Skills" />
      </StyledListItem>

      <StyledListItem button >
        <StyledListItemIcon><GetAppIcon /></StyledListItemIcon>
        <StyledListItemText primary="Download Resume" />
      </StyledListItem>

      <StyledListItem button>
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
            variant="temporary"
            anchor={"left"}
            open={isMobileOpen}
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