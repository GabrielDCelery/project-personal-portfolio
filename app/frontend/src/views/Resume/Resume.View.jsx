import React from 'react';
import {
  ComponentLeftAlignedContainer,
  DownloadDocumentIcon
} from 'components';
import { Box, Grid } from '@material-ui/core';
import config from 'config';

import documentResumePdfUrl from 'assets/documents/cv-gaborzeller.pdf';
import documentResumeWordUrl from 'assets/documents/cv-gaborzeller.docx';

import svgWordUrl from 'assets/images/word.svg';
import svgPdfUrl from 'assets/images/pdf.svg';

export default function ResumeView() {
  return (
    <React.Fragment>
      <Box height="2em" />
      <ComponentLeftAlignedContainer maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item xs={4} sm={4} md={3}>
            <Box padding="3em">
              <DownloadDocumentIcon
                downloadUrl={documentResumePdfUrl}
                svgUrl={svgPdfUrl}
                bordercolor={config.styles.colors.secondary}
                bordercolorhover={config.styles.colors.lightYellowBorder}
                backgroundcolorhover={config.styles.colors.lightYellow}
              />
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <Box padding="3em">
              <DownloadDocumentIcon
                downloadUrl={documentResumeWordUrl}
                svgUrl={svgWordUrl}
                bordercolor={config.styles.colors.secondary}
                bordercolorhover={config.styles.colors.lightYellowBorder}
                backgroundcolorhover={config.styles.colors.lightYellow}
              />
            </Box>
          </Grid>
        </Grid>
      </ComponentLeftAlignedContainer>
    </React.Fragment>
  );
}
