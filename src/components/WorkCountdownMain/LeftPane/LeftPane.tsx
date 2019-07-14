import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import AddNewMission from '../../UI/AddNewMission/AddNewMission';
import PomodoroTime from './PomodoroTime/PomodoroTime';
import ToDoListTopThree from './ToDoListTopThree/ToDoListTopThree';
import { TaskInterface } from '../../../pages/WorkCountdown/WorkCountdown';

const useStyles = makeStyles((theme: Theme): Record<'root', CSSProperties | (() => CSSProperties)> => createStyles({
  root: {
    paddingLeft: 85,
    paddingRight: 30,
    paddingTop: 48,
    paddingBottom: 48,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

interface Props {
  tasks: TaskInterface[];
  selectedTaskId: string | null;
}

export default function LeftPane(props: Props): JSX.Element {
  const classes = useStyles();

  const selectedTask = props.tasks
    .find((task): boolean => task.taskId === props.selectedTaskId);

  const filteredTasks = props.tasks.filter((task): boolean => task.taskId !== props.selectedTaskId);

  return (
    <div className={classes.root}>
      <AddNewMission />
      <PomodoroTime selectedTask={selectedTask} />
      <ToDoListTopThree filteredTasks={filteredTasks} />
    </div>
  );
}
