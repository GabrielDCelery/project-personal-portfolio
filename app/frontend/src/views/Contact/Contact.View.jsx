import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { ComponentLeftAlignedContainer, ContactCard } from 'components';

export default function ContactView(/*{  getter, handler }*/) {
  return (
    <React.Fragment>
      <Box height="2em" />
      <ComponentLeftAlignedContainer maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <ContactCard
              name={'Gabriel Zeller'}
              position={'Full Stack Developer'}
              description={
                'Full Stack Developer with commercial experience in the field of developing and maintaining web applications, looking for an opportunity to further improve his skill set'
              }
              previewImage={'portrait_gabrielzeller'}
              contactEmail={'admin@gabrielzeller.co.uk'}
            />
          </Grid>
        </Grid>
      </ComponentLeftAlignedContainer>
    </React.Fragment>
  );
}
