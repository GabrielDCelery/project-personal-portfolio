import styled from 'styled-components';
import config from 'config';

import { AppBar } from '@material-ui/core';

export const NavAppBar = styled(AppBar)`
  margin-left: ${config.styles.layout.navbar.width};
  @media (min-width: 600px) {
    width: calc(100% - ${config.styles.layout.navbar.width}) !important;
  }
`;

export default NavAppBar;
