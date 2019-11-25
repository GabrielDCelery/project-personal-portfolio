import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Link, Button } from '@material-ui/core';
//import config from 'config';

const StyledList = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 4em;
    position: relative;
    font-size: 1.2em;

    &::after {
      content: '';
      height: 0.9em;
      width: 0.9em;
      border: ${({ styledListBorderColor }) => {
        return `0.2em solid ${styledListBorderColor || '#5c5746'};`;
      }}
      background: ${({ styleListColor }) => {
        return `${styleListColor || '#eddbb4'};`;
      }};
      display: block;
      position: absolute;
      transform: rotate(45deg);
      top: 1.3em;
      left: 1.5em;
    }
  }
`;

const renderContent = ({
  type,
  content,
  styleListColor,
  styledListBorderColor,
  url
}) => {
  switch (type) {
    case 'paragraph':
      return <Typography paragraph={true}>{content}</Typography>;
    case 'buttonLink':
      return (
        <Box p="1em" textAlign="center">
          <Link href={url} target="_blank" underline="none">
            <Button fullWidth variant="outlined" color="primary" size="large">
              {content}
            </Button>
          </Link>
        </Box>
      );
    case 'list':
      return (
        <StyledList
          styleListColor={styleListColor}
          styledListBorderColor={styledListBorderColor}
        >
          <ul>
            {content.map((value, index) => {
              return (
                <React.Fragment key={`list-item-${index}`}>
                  <li>{value}</li>
                </React.Fragment>
              );
            })}
          </ul>
        </StyledList>
      );
    default:
      return <React.Fragment></React.Fragment>;
  }
};

export const ComponentParagraphBody = props => {
  const { paragraphs, styleListColor, styledListBorderColor } = props;

  return (
    <Box p="2em">
      {paragraphs.map(({ type, content }, index) => {
        return (
          <React.Fragment key={`paragraph-${index}`}>
            {renderContent({
              type,
              content,
              styleListColor,
              styledListBorderColor
            })}
          </React.Fragment>
        );
      })}
    </Box>
  );
};
