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

import { GitHub as GitHubIcon } from '@material-ui/icons';

import config from 'config';
import _ from 'lodash';

import unleashTheGeekPreviewImage from 'assets/achievments/unleash_the_geek_001.jpg';
import halitePreviewImage from 'assets/achievments/halite3_001.jpg';

const previewImageSrcMap = {
  unleashTheGeekPreviewImage,
  halitePreviewImage
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
      <CardHeader
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
      <CardMedia
        className={classes.media}
        image={previewImageSrcMap[previewImage]}
        title="Paella dish"
      />
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
