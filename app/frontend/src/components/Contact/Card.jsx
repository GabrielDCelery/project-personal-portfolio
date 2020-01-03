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
import _ from 'lodash';

import config from 'config';

import portrait_gabrielzeller from 'assets/images/portrait_gabrielzeller.jpg';

const previewImageUrlsSrcMap = {
  portrait_gabrielzeller
};

const getImageUrl = ({ imageName }) => {
  return previewImageUrlsSrcMap[imageName];
};

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '100%' // 16:9
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

export const ContactCard = props => {
  const {
    bgColor,
    contactEmail,
    description,
    labelColor,
    previewImage,
    name,
    position
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
            {_.first(name)}
          </Avatar>
        }
        /*
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        */
        title={name || ''}
        subheader={position || ''}
      />
      <CardMedia
        className={classes.media}
        image={getImageUrl({ imageName: previewImage })}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>

        <Box height="1em" />

        <Link
          href={`mailto:${contactEmail}`}
          onClick={() => {}}
          target="_blank"
        >
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => {}}
          >
            {`Send email to ${contactEmail.split('@').join('(at)')}`}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
