import React from 'react';
import { useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import LensIcon from '@material-ui/icons/Lens';
import { TaskInterface } from '../../../../pages/WorkCountdown/WorkCountdown';
import { changeTaskDone } from '../../../../actions/toDoList/toDoList';

const useStyles = makeStyles((theme: Theme): Record<'root' | 'checkboxContainer' | 'bigCheckbox'
| 'uncheckedIcon' | 'pomodoroToDoText' | 'timeText' | 'lensIcon'
, CSSProperties | (() => CSSProperties)> => createStyles({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
    },
  },
  checkboxContainer: {
    display: 'flex',
    justifyContent: 'center',
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
    [theme.breakpoints.down('sm')]: {
      fontSize: '4vw',
    },
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: '14vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20vw',
    },
    fontWeight: 'bold',
  },
  lensIcon: {
    color: '#003164',
  },
}));

interface Props {
  selectedTask: TaskInterface | undefined;
  time: number;
}

export default function PomodoroTime(props: Props): JSX.Element {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChangeTaskDone = (): void => {
    if (props.selectedTask) {
      dispatch(changeTaskDone(props.selectedTask));
    }
  };

  const selectedTask = props.selectedTask ? props.selectedTask : {
    taskId: '',
    taskName: '',
    workCount: 0,
    breakCount: 0,
    done: false,
    doneTime: null,
  };

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
          checked={selectedTask.done}
          onChange={handleChangeTaskDone}
        />
        <div>
          <Typography className={classes.pomodoroToDoText}>
            {selectedTask.taskName.toUpperCase()}
          </Typography>
          <div>
            {new Array(selectedTask.workCount).fill('')
              .map((n, index): JSX.Element => <LensIcon key={index} className={classes.lensIcon} fontSize="small" />)}
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
        {`${Math.floor(props.time / 60).toString().padStart(2, '0')}:${(props.time % 60).toString().padStart(2, '0')}`}
      </Typography>
    </div>
  );
}
