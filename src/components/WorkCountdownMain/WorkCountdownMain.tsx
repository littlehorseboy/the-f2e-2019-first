import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListIcon from '@material-ui/icons/List';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddNewMission from '../UI/AddNewMission/AddNewMission';
import PomodoroTime from './PomodoroTime/PomodoroTime';
import ToDoListTopThree from './ToDoListTopThree/ToDoListTopThree';

const fabWidth: number = 540;

const useStyles = makeStyles({
  root: {
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
  },
  leftPane: {
    backgroundColor: '#FFEDF7',
    '& > div': {
      paddingLeft: 85,
      paddingRight: 30,
      paddingTop: 48,
      paddingBottom: 48,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
  middlePane: {
    position: 'relative',
  },
  middleContaiberPane: {
    height: '100%',
  },
  middleLeftPane: {
    backgroundColor: '#FFEDF7',
  },
  middleRightPane: {
    backgroundColor: '#003164',
  },
  rightPane: {
    backgroundColor: '#003164',
    '& > div': {
      paddingTop: 48,
      paddingBottom: 48,
      paddingRight: 48,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  rightPaneTop: {
    display: 'flex',
    flexDirection: 'column',
  },
  rightPaneBottom: {
    transform: 'rotate(90deg)',
    marginBottom: '4rem',
    color: '#FFFFFF',
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

  const [completed, setCompleted] = useState(0);

  useEffect((): () => void => {
    const timer = setInterval((): void => {
      setCompleted(
        (prevCompleted: number): number => (prevCompleted >= 100 ? 0 : prevCompleted + 2),
      );
    }, 200);
    return (): void => {
      debugger;
      clearInterval(timer);
    };
  }, []);

  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={5} className={classes.leftPane}>
          <div>
            <AddNewMission />
            <PomodoroTime />
            <ToDoListTopThree />
          </div>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.middlePane}>
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
        </Grid>

        <Grid item xs={12} sm={1} className={classes.rightPane}>
          <div>
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
        </Grid>
      </Grid>
    </Container>
  );
}
