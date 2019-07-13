import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AddNewMission from '../UI/AddNewMission/AddNewMission';
import PomodoroTime from './PomodoroTime/PomodoroTime';
import ToDoListTopThree from './ToDoListTopThree/ToDoListTopThree';
import MiddlePane from './MiddlePane/MiddlePane';
import RightPane from './RightPane/RightPane';
import { TasksInterface } from '../../pages/WorkCountdown/WorkCountdown';

const fabWidth = 540;

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
  rightPane: {
    backgroundColor: '#003164',
  },
});

interface Props {
  tasks: TasksInterface;
}

export default function WorkCountdownMain(props: Props): JSX.Element {
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

        <Grid item xs={12} sm={6} className={classes.middlePane}>
          <MiddlePane />
        </Grid>

        <Grid item xs={12} sm={1} className={classes.rightPane}>
          <RightPane />
        </Grid>
      </Grid>
    </Container>
  );
}
