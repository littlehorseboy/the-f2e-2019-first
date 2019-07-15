import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { TaskInterface } from '../../../../pages/WorkCountdown/WorkCountdown';
import { changeTaskDone } from '../../../../actions/toDoList/toDoList';

const useStyles = makeStyles({
  root: {

  },
  listItemText: {
    '& > span': {
      fontSize: '1.2rem',
    },
  },
  buttonContainer: {
    textAlign: 'right',
  },
});

interface Props {
  filteredTasks: TaskInterface[];
}

export default function ToDoListTopThree(props: Props): JSX.Element {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChangeTaskDone = (task: TaskInterface): void => {
    dispatch(changeTaskDone(task));
  };

  return (
    <div className={classes.root}>
      <List>
        {props.filteredTasks
          .slice(0, 3)
          .map((task): JSX.Element => <ListItem key={task.taskId} dense button divider>
            <ListItemIcon>
              <Checkbox
                edge="start"
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
                checked={task.done}
                onChange={(): void => handleChangeTaskDone(task)}
              />
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary={task.taskName.toUpperCase()}
            />
            <ListItemSecondaryAction>
              <Link to={`/?taskId=${task.taskId}`}>
                <IconButton edge="end" aria-label="Play">
                  <PlayCircleOutlineIcon />
                </IconButton>
              </Link>
            </ListItemSecondaryAction>
          </ListItem>)}
      </List>
      <div className={classes.buttonContainer}>
        <Button color="secondary">MORE</Button>
      </div>
    </div>
  );
}
