import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {

  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  bigCheckbox: {
    '& svg': {
      width: '2.4em',
      height: '2.4em',
    },
  },
  uncheckedIcon: {
    color: '#003164',
  },
  pomodoroToDoText: {
    color: '#003164',
    fontSize: '1.6vw',
    fontWeight: 'bold',
  },
  circleContainer: {
    '& svg': {

    },
  },
  timeText: {
    fontSize: '14vw',
    fontWeight: 'bold',
  },
});

interface Props {
  selectedTask: {
    taskId: string;
    taskName: string;
    workCount: number;
    breakCount: number;
    done: boolean;
    doneTime: Date;
  };
}

export default function PomodoroTime(props: Props): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.checkboxContainer}>
        <Checkbox
          className={classes.bigCheckbox}
          icon={<svg className={classes.uncheckedIcon} viewBox="22 22 44 44">
            <circle
              className="MuiCircularProgress-circle MuiCircularProgress-circleStatic"
              cx="44" cy="44" r="17.5" fill="none" strokeWidth="3"
            />
          </svg>}
          checkedIcon={<CheckCircleIcon />}
          checked={props.selectedTask.done}
        />
        <div>
          <Typography className={classes.pomodoroToDoText}>
            {props.selectedTask.taskName.toUpperCase()}
          </Typography>
          <div className={classes.circleContainer}>
            {new Array(props.selectedTask.workCount).map((n, index): JSX.Element => <RadioButtonUncheckedIcon key={index} color="secondary" fontSize="small" />)}
            <RadioButtonUncheckedIcon color="secondary" fontSize="small" />
          </div>
        </div>
      </div>
      <Typography
        color="secondary"
        variant="h1"
        align="center"
        className={classes.timeText}
      >
        25:00
      </Typography>
    </div>
  );
}
