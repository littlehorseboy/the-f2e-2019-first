import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToDoListExpansionPanel from './ToDoListExpansionPanel/ToDoListExpansionPanel';
import AddNewMission from '../../UI/AddNewMission/AddNewMission';
import { TaskInterface } from '../../../pages/WorkCountdown/WorkCountdown';

const useStyles = makeStyles({
  root: {
    paddingTop: 48,
    paddingLeft: 48,
    paddingRight: 48,
  },
});

interface Props {
  tasks: TaskInterface[];
}

export default function MiddlePane(props: Props): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AddNewMission />

      <ToDoListExpansionPanel tasks={props.tasks} />
    </div>
  );
}
