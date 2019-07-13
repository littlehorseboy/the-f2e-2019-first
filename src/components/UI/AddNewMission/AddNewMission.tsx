import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { addTask } from '../../../actions/toDoList/toDoList';

const useStyles = makeStyles({
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
});

export default function CustomizedInputBase(): JSX.Element {
  const classes = useStyles();

  const [taskName, setTaskName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setTaskName(e.target.value);
  };

  const dispatch = useDispatch();

  const handleClick = (): void => {
    if (taskName) {
      dispatch(addTask({
        taskId: new Date().getTime().toString(),
        taskName,
        workCount: 0,
        breakCount: 0,
        done: false,
        doneTime: null,
      }));
      setTaskName('');
    }
  };

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="ADD A NEW MISSION..."
        inputProps={{ 'aria-label': 'add a new mission…' }}
        value={taskName}
        onChange={handleChange}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="Search"
        onClick={handleClick}
      >
        <AddIcon color="secondary" />
      </IconButton>
    </Paper>
  );
}
