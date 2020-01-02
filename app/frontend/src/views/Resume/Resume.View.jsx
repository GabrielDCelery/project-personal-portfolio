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
          <Grid item xs={6} sm={6} md={3}>
            <DownloadDocumentIcon
              downloadUrl={documentResumePdfUrl}
              svgUrl={svgPdfUrl}
              bordercolor={config.styles.colors.primary}
              bordercolorhover={config.styles.colors.lightYellowBorder}
              backgroundcolorhover={config.styles.colors.lightYellow}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <DownloadDocumentIcon
              downloadUrl={documentResumeWordUrl}
              svgUrl={svgWordUrl}
              bordercolor={config.styles.colors.primary}
              bordercolorhover={config.styles.colors.lightYellowBorder}
              backgroundcolorhover={config.styles.colors.lightYellow}
            />
          </Grid>
        </Grid>
      </ComponentLeftAlignedContainer>
    </React.Fragment>
  );
}
