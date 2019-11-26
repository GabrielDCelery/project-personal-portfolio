import React from 'react';
import { Box, Grid } from '@material-ui/core';

import { ComponentLeftAlignedContainer, AchievmentCard } from 'components';

export default function AchievmentsView({ getter, handler }) {
  return (
    <React.Fragment>
      <Box height="2em" />
      <ComponentLeftAlignedContainer maxWidth="xl">
        <Grid container spacing={4}>
          {getter('items').map(
            (
              {
                name,
                type,
                codeUrl,
                reportUrl,
                description,
                finalPlace,
                numOfCompetitors,
                previewImage
              },
              index
            ) => {
              return (
                <React.Fragment key={`competition-item-${index}`}>
                  <Grid item md={12} lg={4}>
                    <AchievmentCard
                      title={name}
                      subTitle={type}
                      description={description}
                      previewImage={previewImage}
                      finalPlace={finalPlace}
                      numOfCompetitors={numOfCompetitors}
                      codeUrl={codeUrl}
                      reportUrl={reportUrl}
                    />
                  </Grid>
                </React.Fragment>
              );
            }
          )}
        </Grid>
      </ComponentLeftAlignedContainer>

      <Box height="4em" />
    </React.Fragment>
  );
}
