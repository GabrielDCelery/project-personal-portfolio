import { Box } from '@material-ui/core';
import config from 'config';
import styled from 'styled-components';

export const SkillsVerticalGradientBox = styled(Box)`
  height: 100%;
  background: linear-gradient(
    180deg,
    ${config.styles.colors.lightYellow} 0%,
    ${config.styles.colors.primary} 100%
  );
`;

export default SkillsVerticalGradientBox;
