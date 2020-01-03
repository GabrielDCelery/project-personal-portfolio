import React from 'react';
import { Box, Card } from '@material-ui/core';
import styled from 'styled-components';
import Color from 'color';

const StyledCard = styled(Card)`
  text-align: center;

  &.MuiPaper-root {
    margin: 0.5em;
    color: ${({ bgcolor }) => {
      const lightTextColor = '#fff';
      const darkTextColor = '#000';

      return Color(bgcolor).contrast(Color(lightTextColor)) <
        Color(bgcolor).contrast(Color(darkTextColor))
        ? Color(bgcolor)
            .darken(0.7)
            .hex()
        : Color(bgcolor)
            .lighten(0.7)
            .hex();
    }};
    background-color: ${({ bgcolor }) => {
      return `${bgcolor};`;
    }};
  }
`;

const StyledParagraph = styled.p`
  text-align: center;
`;

export const SkillsCard = props => {
  const { bgColor, label } = props;

  return (
    <StyledCard bgcolor={bgColor}>
      <Box padding="1em">
        <StyledParagraph>{(label || '').toUpperCase()}</StyledParagraph>
      </Box>
    </StyledCard>
  );
};

export default SkillsCard;
