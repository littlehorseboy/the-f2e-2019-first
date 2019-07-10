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
  pomodoroToDoText: {
    color: '#003164',
    fontSize: '2.2vw',
  },
  circleContainer: {
    '& svg': {

    },
  },
  timeText: {
    fontSize: '14vw',
  },
});

export default function PomodoroTime(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.checkboxContainer}>
        <Checkbox
          className={classes.bigCheckbox}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <div>
          <Typography className={classes.pomodoroToDoText}>
            the First thing to do today
          </Typography>
          <div className={classes.circleContainer}>
            <RadioButtonUncheckedIcon color="secondary" fontSize="small" />
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
