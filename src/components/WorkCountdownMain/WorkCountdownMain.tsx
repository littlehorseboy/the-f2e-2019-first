import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LeftPane from './LeftPane/LeftPane';
import MiddlePane from './MiddlePane/MiddlePane';
import RightPane from './RightPane/RightPane';
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
  selectedTaskId: string | null;
}

const originSeconds = 15;
let seconds = originSeconds;
let timer = setInterval((): void => {}, 10000);

export default function WorkCountdownMain(props: Props): JSX.Element {
  const classes = useStyles();

  const [time, setTime] = useState(seconds);
  const [countdownStatus, setCountdownStatus] = useState<'play' | 'pause' | 'stop'>('pause');

  useEffect((): void => {
    if (countdownStatus === 'play') {
      timer = setInterval((): void => {
        seconds -= 1;
        setTime(seconds);

        if (seconds <= 0) {
          clearInterval(timer);
          setTimeout((): void => {
            seconds = originSeconds;
            setTime(originSeconds);
          }, 2000);
        }
      }, 1000);
    } else if (timer) {
      switch (countdownStatus) {
        case 'pause':
          clearInterval(timer);
          break;
        case 'stop':
          clearInterval(timer);
          seconds = originSeconds;
          setTime(originSeconds);
          break;
        default:
      }
    }
  }, [countdownStatus]);

  const changeCountdownStatus = (status: 'play' | 'pause' | 'stop'): void => {
    setCountdownStatus(status);
  };

  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={5} className={classes.leftPane}>
          <LeftPane tasks={props.tasks} selectedTaskId={props.selectedTaskId} time={time} />
        </Grid>

        <Grid item xs={12} sm={12} md={6} className={classes.middlePane}>
          <MiddlePane
            changeCountdownStatus={changeCountdownStatus}
            countdownStatus={countdownStatus}
            time={time}
            originSeconds={originSeconds}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={1} className={classes.rightPane}>
          <RightPane />
        </Grid>
      </Grid>
    </Container>
  );
}
