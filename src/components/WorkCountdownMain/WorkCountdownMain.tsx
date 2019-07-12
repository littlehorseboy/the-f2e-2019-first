import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddNewMission from '../UI/AddNewMission/AddNewMission';
import PomodoroTime from './PomodoroTime/PomodoroTime';
import ToDoListTopThree from './ToDoListTopThree/ToDoListTopThree';

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
    marginBottom: '2.5rem',
    color: '#FFFFFF',
    fontSize: '1rem',
    fontWeight: 'bold',
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
    width: 540,
    height: 540,
    border: '3px solid transparent',
    outline: '3px solid transparent',
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
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={5} className={classes.leftPane}>
          <div>
            <AddNewMission />
            <PomodoroTime />
            <ToDoListTopThree />
          </div>
        </Grid>
        <Grid item xs={12} sm={5} className={classes.middlePane}>
          <Grid container spacing={0} className={classes.middleContaiberPane}>
            <Grid item xs={12} sm={6} className={classes.middleLeftPane}></Grid>
            <Grid item xs={12} sm={6} className={classes.middleRightPane}></Grid>
          </Grid>
          <div className={classes.fabContainer}>
            <Fab className={classes.fab} color="secondary" />
          </div>
        </Grid>
        <Grid item xs={12} sm={2} className={classes.rightPane}>
          <div>
            <div className={classes.rightPaneTop}>
              <IconButton className={classes.icon}>
                <ListIcon />
              </IconButton>
              <IconButton className={classes.icon}>
                <AssessmentIcon />
              </IconButton>
              <IconButton className={classes.icon}>
                <LibraryMusicIcon />
              </IconButton>
            </div>
            <div className={classes.rightPaneBottom}>
              POMODORO
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
