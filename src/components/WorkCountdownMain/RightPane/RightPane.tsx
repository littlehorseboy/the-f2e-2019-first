import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const useStyles = makeStyles({
  root: {
    paddingTop: 48,
    paddingBottom: 48,
    paddingRight: 48,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightPaneTop: {
    display: 'flex',
    flexDirection: 'column',
  },
  rightPaneBottom: {
    transform: 'rotate(90deg)',
    marginBottom: '4rem',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  icon: {
    color: '#FFFFFF',
    marginBottom: '1rem',
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export default function WorkCountdownMain(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.rightPaneTop}>
        <IconButton className={classes.icon}>
          <ListIcon fontSize="large" />
        </IconButton>
        <IconButton className={classes.icon}>
          <AssessmentIcon fontSize="large" />
        </IconButton>
        <IconButton className={classes.icon}>
          <LibraryMusicIcon fontSize="large" />
        </IconButton>
      </div>
      <Typography className={classes.rightPaneBottom} variant="h5">
        POMODORO
      </Typography>
    </div>
  );
}
