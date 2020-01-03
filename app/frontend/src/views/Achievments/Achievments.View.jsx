import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { SizeMe } from 'react-sizeme';
import UILeftAlignedContainer from 'components/UI/LeftAlignedContainer';
import CompetitionsCard from 'components/Competitions/Card';

import achievment_halite_3_320 from 'assets/images/achievment_halite_3_320.jpg';
import achievment_halite_3_640 from 'assets/images/achievment_halite_3_640.jpg';
import achievment_halite_3_800 from 'assets/images/achievment_halite_3_800.jpg';
import achievment_halite_3_1024 from 'assets/images/achievment_halite_3_1024.jpg';
import achievment_halite_3_1280 from 'assets/images/achievment_halite_3_1280.jpg';

import achievment_unleash_the_geek_320 from 'assets/images/achievment_unleash_the_geek_320.jpg';
import achievment_unleash_the_geek_640 from 'assets/images/achievment_unleash_the_geek_640.jpg';
import achievment_unleash_the_geek_800 from 'assets/images/achievment_unleash_the_geek_800.jpg';
import achievment_unleash_the_geek_1024 from 'assets/images/achievment_unleash_the_geek_1024.jpg';
import achievment_unleash_the_geek_1280 from 'assets/images/achievment_unleash_the_geek_1280.jpg';

import placeholder_img from 'assets/images/1x1.png';

const previewImageUrlsSrcMap = {
  achievment_halite_3_320,
  achievment_halite_3_640,
  achievment_halite_3_800,
  achievment_halite_3_1024,
  achievment_halite_3_1280,
  achievment_unleash_the_geek_320,
  achievment_unleash_the_geek_640,
  achievment_unleash_the_geek_800,
  achievment_unleash_the_geek_1024,
  achievment_unleash_the_geek_1280
};

const imageSizes = [320, 640, 800, 1024, 1280];

const getImageUrl = ({ imageName, containerSize }) => {
  if (containerSize === undefined) {
    return placeholder_img;
  }

  for (let i = 0, iMax = imageSizes.length; i < iMax; i++) {
    if (containerSize < imageSizes[i]) {
      return previewImageUrlsSrcMap[`${imageName}_${imageSizes[i]}`];
    }
  }

  return previewImageUrlsSrcMap[
    `${imageName}_${imageSizes[imageSizes.length - 1]}`
  ];
};

export default function AchievmentsView({ getter /*, handler*/ }) {
  return (
    <React.Fragment>
      <Box height="2em" />
      <UILeftAlignedContainer maxWidth="xl">
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
                    <SizeMe>
                      {({ size }) => {
                        const { width } = size;

                        return (
                          <CompetitionsCard
                            title={name}
                            subTitle={type}
                            description={description}
                            previewImageUrl={getImageUrl({
                              imageName: previewImage,
                              containerSize: width
                            })}
                            finalPlace={finalPlace}
                            numOfCompetitors={numOfCompetitors}
                            codeUrl={codeUrl}
                            reportUrl={reportUrl}
                          />
                        );
                      }}
                    </SizeMe>
                  </Grid>
                </React.Fragment>
              );
            }
          )}
        </Grid>
      </UILeftAlignedContainer>

      <Box height="4em" />
    </React.Fragment>
  );
}
