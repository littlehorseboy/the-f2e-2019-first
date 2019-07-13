import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LeftPane from '../WorkCountdownMain/LeftPane/LeftPane';
import MiddlePane from '../WorkCountdownMain/MiddlePane/MiddlePane';
import RightPane from '../WorkCountdownMain/RightPane/RightPane';
import { TaskInterface } from '../../pages/WorkCountdown/WorkCountdown';

const useStyles = makeStyles({
  root: {
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
  },
  leftPane: {
    backgroundColor: '#FFEDF7',
  },
  middlePane: {
    position: 'relative',
  },
  rightPane: {
    backgroundColor: '#003164',
  },
});

interface Props {
  tasks: TaskInterface[];
}

export default function WorkCountdownMain(props: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={5} className={classes.leftPane}>
          {/* <LeftPane tasks={props.tasks} selectedTaskId={'123'} /> */}
        </Grid>

        <Grid item xs={12} sm={12} md={6} className={classes.middlePane}>
          {/* <MiddlePane /> */}
        </Grid>

        <Grid item xs={12} sm={12} md={1} className={classes.rightPane}>
          {/* <RightPane /> */}
        </Grid>
      </Grid>
    </Container>
  );
}
