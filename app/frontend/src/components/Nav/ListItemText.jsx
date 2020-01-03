import styled from 'styled-components';
import config from 'config';
import { ListItemText } from '@material-ui/core';

export const NavListItemText = styled(ListItemText)`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${config.styles.colors.navbar.text.default} !important;
  text-align: center;
  transition: all 0.4s ease-in-out;

  .MuiTypography-root {
    font-size: 1em;
    font-weight: bold;
  }
`;

export default NavListItemText;
