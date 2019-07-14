import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import ToDoListExpansionPanel from './ToDoListExpansionPanel/ToDoListExpansionPanel';
import { TaskInterface } from '../../../pages/WorkCountdown/WorkCountdown';

const useStyles = makeStyles((theme: Theme): Record<'root', CSSProperties | (() => CSSProperties)> => createStyles({
  root: {
    paddingTop: 48,
    paddingLeft: 48,
    paddingRight: 64,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
}));

interface Props {
  tasks: TaskInterface[];
}

export default function MiddlePane(props: Props): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ToDoListExpansionPanel tasks={props.tasks} />
    </div>
  );
}
