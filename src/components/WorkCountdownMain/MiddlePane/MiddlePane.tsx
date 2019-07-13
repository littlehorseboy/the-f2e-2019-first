import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import StopIcon from '@material-ui/icons/Stop';

const useStyles = makeStyles((theme: Theme): Record<'middleContaiberPane' | 'middleLeftPane'
| 'middleRightPane' | 'fabContainer' | 'fab' | 'playCircleIcon' | 'iconButton' | 'progress'
| 'fabBorderSvg', CSSProperties | (() => CSSProperties)> => createStyles({
  middleContaiberPane: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 500,
    },
    [theme.breakpoints.down('xs')]: {
      height: 400,
    },
  },
  middleLeftPane: {
    backgroundColor: '#FFEDF7',
  },
  middleRightPane: {
    backgroundColor: '#003164',
  },
  fabContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    width: theme.spacing(67.5),
    height: theme.spacing(67.5),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(60),
      height: theme.spacing(60),
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
    border: '3px solid transparent',
    outline: '3px solid transparent',
    zIndex: 1,
  },
  playCircleIcon: {
    fontSize: '8rem',
  },
  iconButton: {
    position: 'absolute',
    color: '#FFFFFF',
    transform: 'translate(75px, 45px)',
    zIndex: 1,
  },
  progress: {
    position: 'absolute',
    width: `${theme.spacing(67.5) + 30}px !important`,
    height: `${theme.spacing(67.5) + 30}px !important`,
    [theme.breakpoints.down('sm')]: {
      width: `${theme.spacing(60) + 30}px !important`,
      height: `${theme.spacing(60) + 30}px !important`,
    },
    [theme.breakpoints.down('xs')]: {
      width: `${theme.spacing(40) + 30}px !important`,
      height: `${theme.spacing(40) + 30}px !important`,
    },
  },
  fabBorderSvg: {
    position: 'absolute',
    width: theme.spacing(67.5) + 50,
    height: theme.spacing(67.5) + 50,
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(60) + 50,
      height: theme.spacing(60) + 50,
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(40) + 50,
      height: theme.spacing(40) + 50,
    },
    color: '#FF4384',
  },
}));

export default function WorkCountdownMain(): JSX.Element {
  const classes = useStyles();

  const [completed, setCompleted] = useState(0);

  useEffect((): () => void => {
    const timer = setInterval((): void => {
      setCompleted(
        (prevCompleted: number): number => (prevCompleted >= 100 ? 0 : prevCompleted + 5),
      );
    }, 500);
    return (): void => {
      debugger;
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Grid container spacing={0} className={classes.middleContaiberPane}>
        <Grid item xs={12} sm={12} md={6} className={classes.middleLeftPane}></Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.middleRightPane}></Grid>
      </Grid>
      <div className={classes.fabContainer}>
        <Fab className={classes.fab} color="secondary">
          <PlayCircleFilledIcon className={classes.playCircleIcon} />
        </Fab>
        <IconButton className={classes.iconButton} aria-label="Stop">
          <StopIcon />
        </IconButton>

        <CircularProgress
          className={classes.progress}
          variant="static"
          value={completed}
          thickness={1}
        />
        <svg className={classes.fabBorderSvg} viewBox="22 22 44 44">
          <circle
            className="MuiCircularProgress-circle MuiCircularProgress-circleStatic"
            cx="44" cy="44" r="21.5" fill="none" strokeWidth="0.2"
          />
        </svg>
      </div>
    </>
  );
}
