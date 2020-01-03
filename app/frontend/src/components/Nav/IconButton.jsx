import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const NavIconButton = styled(IconButton)`
  margin-right: 16px !important;
  @media (min-width: 600px) {
    display: none !important;
  }
`;

export default NavIconButton;
