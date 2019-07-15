import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import ToDoListExpansionPanel from './ToDoListExpansionPanel/ToDoListExpansionPanel';

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

export default function MiddlePane(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ToDoListExpansionPanel />
    </div>
  );
}
