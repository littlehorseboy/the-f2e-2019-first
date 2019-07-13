import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const fabWidth = 540;

const useStyles = makeStyles({
  middleContaiberPane: {
    height: '100%',
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
    width: fabWidth,
    height: fabWidth,
    border: '3px solid transparent',
    outline: '3px solid transparent',
    zIndex: 1,
  },
  playCircleIcon: {
    fontSize: '8rem',
  },
  progress: {
    position: 'absolute',
    width: `${fabWidth + 30}px !important`,
    height: `${fabWidth + 30}px !important`,
  },
});

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
        <Grid item xs={12} sm={6} className={classes.middleLeftPane}></Grid>
        <Grid item xs={12} sm={6} className={classes.middleRightPane}></Grid>
      </Grid>
      <div className={classes.fabContainer}>
        <Fab className={classes.fab} color="secondary">
          <PlayCircleFilledIcon className={classes.playCircleIcon} />
        </Fab>
        <CircularProgress
          className={classes.progress}
          variant="static"
          value={completed}
          thickness={1}
        />
      </div>
    </>
  );
}
