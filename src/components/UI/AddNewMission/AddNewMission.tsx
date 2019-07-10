import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(createStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    flex: 1,
    borderRadius: 0,
    '& > input::placeholder': {
      color: '#FF4384',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  },
  iconButton: {
    padding: 10,
  },
}));

export default function CustomizedInputBase(): JSX.Element {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="add a new mission…"
        inputProps={{ 'aria-label': 'add a new mission…' }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <AddIcon color="secondary" />
      </IconButton>
    </Paper>
  );
}
