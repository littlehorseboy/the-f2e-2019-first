import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const useStyles = makeStyles((theme: Theme): Record<'root' | 'rightPaneTop' | 'rightPaneBottom' | 'iconButton', CSSProperties | (() => CSSProperties)> => createStyles({
  root: {
    paddingTop: 48,
    paddingBottom: 48,
    paddingRight: 48,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightPaneTop: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
  },
  rightPaneBottom: {
    transform: 'rotate(90deg)',
    marginBottom: '4rem',
    [theme.breakpoints.down('sm')]: {
      transform: 'none',
      marginBottom: 0,
    },
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  iconButton: {
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
    '& > button': {
      color: '#FFFFFF',
    },
  },
}));

export default function RightPane(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.rightPaneTop}>
        <Link to="/todolist" className={classes.iconButton}>
          <IconButton>
            <ListIcon fontSize="large" />
          </IconButton>
        </Link>

        <Link to="/analytics" className={classes.iconButton}>
          <IconButton>
            <AssessmentIcon fontSize="large" />
          </IconButton>
        </Link>

        <Link to="/ringtones" className={classes.iconButton}>
          <IconButton>
            <LibraryMusicIcon fontSize="large" />
          </IconButton>
        </Link>
      </div>
      <Typography className={classes.rightPaneBottom} variant="h5">
        POMODORO
      </Typography>
    </div>
  );
}
