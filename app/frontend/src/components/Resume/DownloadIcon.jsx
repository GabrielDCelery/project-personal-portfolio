import React from 'react';
import { Box, Link } from '@material-ui/core';
import { SizeMe } from 'react-sizeme';
import styled from 'styled-components';

const StyledImageContainer = styled(Box)`
  height: ${({ width }) => {
    return `${width || 0}px;`;
  }};
`;

const StyledImageBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ width }) => {
    return `${(width || 0) / 5}px;`;
  }};
  border: ${({ bordercolor, width }) => {
    return `solid ${(width || 0) / 30}px ${bordercolor};`;
  }};
  height: 100%;
  transition: border-color 0.5s, background-color 0.5s;
  &:hover {
    background-color: ${({ backgroundcolorhover }) => {
      return `${backgroundcolorhover};`;
    }};
    border-color: ${({ bordercolorhover }) => {
      return `${bordercolorhover};`;
    }};
  }
`;

const StyldImage = styled.img`
  width: 50%;
  height: 50%;
`;

export const ResumeDownloadIcon = props => {
  const {
    backgroundcolorhover,
    bordercolor,
    bordercolorhover,
    downloadUrl,
    svgUrl
  } = props;

  return (
    <Box padding="15px">
      <SizeMe>
        {({ size }) => {
          const { width } = size;
          return (
            <StyledImageContainer width={width}>
              <Link
                href={downloadUrl}
                target="_blank"
                underline="none"
                download
              >
                <StyledImageBox
                  width={width}
                  backgroundcolorhover={backgroundcolorhover}
                  bordercolor={bordercolor}
                  bordercolorhover={bordercolorhover}
                >
                  <StyldImage src={svgUrl} />
                </StyledImageBox>
              </Link>
            </StyledImageContainer>
          );
        }}
      </SizeMe>
    </Box>
  );
};
