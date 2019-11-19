import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';
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
      border: 0.2em solid #5c5746;
      background: #eddbb4;
      display: block;
      position: absolute;
      transform: rotate(45deg);
      top: 1.3em;
      left: 1.5em;
    }
  }
`;

const renderContent = ({ type, content }) => {
  switch (type) {
    case 'paragraph':
      return <Typography paragraph={true}>{content}</Typography>;
    case 'list':
      return (
        <StyledList>
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
  const { paragraphs } = props;

  return (
    <Box p="2em">
      {paragraphs.map(({ type, content }, index) => {
        return (
          <React.Fragment key={`paragraph-${index}`}>
            {renderContent({ type, content })}
          </React.Fragment>
        );
      })}
    </Box>
  );
};
