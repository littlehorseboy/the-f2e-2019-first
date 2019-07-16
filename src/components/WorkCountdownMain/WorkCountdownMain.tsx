import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LeftPane from './LeftPane/LeftPane';
import MiddlePane from './MiddlePane/MiddlePane';
import RightPane from './RightPane/RightPane';
import { TaskInterface } from '../../pages/WorkCountdown/WorkCountdown';
import { increaseTaskWorkCount } from '../../actions/toDoList/toDoList';

const useStyles = makeStyles({
  root: {
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
  },
  leftPane: {
    backgroundColor: '#FFEDF7',
    '&.break': {
      backgroundColor: '#E5F3FF',
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
  tasks: TaskInterface[];
  selectedTaskId: string | null;
}

const originSeconds = 5;
let seconds = originSeconds;
let timer = setInterval((): void => {}, 10000);

export default function WorkCountdownMain(props: Props): JSX.Element {
  const classes = useStyles();

  const [time, setTime] = useState(seconds);
  const [countdownStatus, setCountdownStatus] = useState<'play' | 'pause' | 'stop'>('pause');

  const dispatch = useDispatch();

  const changeCountdownStatus = (status: 'play' | 'pause' | 'stop'): void => {
    setCountdownStatus(status);
  };

  const selectedTask = props.tasks
    .find((task): boolean => task.taskId === props.selectedTaskId);

  const isWorkStatus = !!selectedTask
    && selectedTask.workCount <= selectedTask.breakCount;

  useEffect((): void => {
    if (countdownStatus === 'play') {
      timer = setInterval((): void => {
        seconds -= 1;
        setTime(seconds);

        if (seconds <= 0) {
          const findTask = props.tasks
            .find((task): boolean => task.taskId === props.selectedTaskId);
          if (findTask) {
            dispatch(increaseTaskWorkCount(findTask));
          }
          setTimeout((): void => {
            changeCountdownStatus('stop');
          }, 500);
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

  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={5} className={classNames(
          classes.leftPane, { break: !isWorkStatus },
        )}>
          <LeftPane
            tasks={props.tasks}
            selectedTaskId={props.selectedTaskId}
            countdownStatus={countdownStatus}
            time={time}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} className={classes.middlePane}>
          <MiddlePane
            isWorkStatus={isWorkStatus}
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
