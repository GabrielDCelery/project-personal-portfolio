import styled from 'styled-components';
import config from 'config';
import { ListItemIcon } from '@material-ui/core';

export const NavListItemIcon = styled(ListItemIcon)`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${config.styles.colors.navbar.text.default} !important;
  transition: all 0.4s ease-in-out;
`;

export default NavListItemIcon;
