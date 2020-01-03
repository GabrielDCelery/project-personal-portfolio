import React from 'react';
import styled from 'styled-components';
import { Chip, Typography } from '@material-ui/core';
import config from 'config';

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
      border: ${({ bordercolor }) => {
        return `0.2em solid ${bordercolor || config.styles.colors.darkBg};`;
      }}
      background: ${({ bgcolor }) => {
        return `${bgcolor || config.styles.colors.lightBg};`;
      }};
      display: block;
      position: absolute;
      transform: rotate(45deg);
      top: 1.3em;
      left: 1.5em;
    }
  }
`;

const StyledChip = styled(Chip)`
  &.MuiChip-root {
    margin: 0.5em;
    background: ${({ bgcolor }) => {
      return `${bgcolor || config.styles.colors.lightBg};`;
    }};
    border: ${({ bordercolor }) => {
      return `0.2em solid ${bordercolor || config.styles.colors.darkBg};`;
    }};
  }
`;

const renderContent = ({ type, content, bgColor, borderColor, textColor }) => {
  switch (type) {
    case 'paragraph':
      return <Typography paragraph={true}>{content}</Typography>;
    case 'list':
      return (
        <StyledList bgcolor={bgColor} bordercolor={borderColor}>
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
    case 'badge':
      return (
        <React.Fragment>
          {content.map((value, index) => {
            return (
              <React.Fragment key={`list-item-${index}`}>
                <StyledChip
                  label={value}
                  bgcolor={bgColor}
                  bordercolor={borderColor}
                  textcolor={textColor}
                />
              </React.Fragment>
            );
          })}
        </React.Fragment>
      );
    default:
      return <React.Fragment></React.Fragment>;
  }
};

export const WorkHistorySectionParagraph = props => {
  const { type, content, bgColor, borderColor, textColor } = props;

  return (
    <React.Fragment>
      {renderContent({
        type,
        content,
        bgColor,
        borderColor,
        textColor
      })}
    </React.Fragment>
  );
};

export default WorkHistorySectionParagraph;
