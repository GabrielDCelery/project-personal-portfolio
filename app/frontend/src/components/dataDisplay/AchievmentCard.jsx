import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography
} from '@material-ui/core';
import styled from 'styled-components';

import { SizeMe } from 'react-sizeme';
import { GitHub as GitHubIcon } from '@material-ui/icons';

import config from 'config';
import _ from 'lodash';

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

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: config.styles.colors.secondary
  }
}));

const StyledCardHeader = styled(CardHeader)`
  .MuiCardHeader-subheader {
    color: #bbb;
  }
`;

export const AchievmentCard = props => {
  const {
    bgColor,
    codeUrl,
    description,
    finalPlace,
    labelColor,
    numOfCompetitors,
    previewImage,
    reportUrl,
    subTitle,
    title
  } = props;

  const bgcolor = bgColor || config.styles.colors.primary;
  const labelcolor = labelColor || config.styles.colors.darkBgText;

  const classes = useStyles();

  return (
    <Card>
      <StyledCardHeader
        style={{
          backgroundColor: bgcolor,
          color: labelcolor,
          borderBottom: '3px solid #000'
        }}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {_.first(title)}
          </Avatar>
        }
        /*
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        */
        title={title || ''}
        subheader={subTitle || ''}
      />
      <SizeMe>
        {({ size }) => {
          const { width } = size;
          const imgUrl = getImageUrl({
            imageName: previewImage,
            containerSize: width
          });

          return (
            <CardMedia
              className={classes.media}
              image={imgUrl}
              title="Paella dish"
            />
          );
        }}
      </SizeMe>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>

        <Box height="1em" />

        <Link href={reportUrl} target="_blank" underline="none">
          <Button fullWidth variant="outlined" color="primary">
            {`Final Place ${finalPlace} out of ${numOfCompetitors}`}
          </Button>
        </Link>

        <Box height="1em" />
        <Link href={codeUrl} target="_blank" underline="none">
          <Button fullWidth variant="outlined" color="primary">
            Code (with post mortem){' '}
            <GitHubIcon style={{ marginLeft: '10px' }} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
