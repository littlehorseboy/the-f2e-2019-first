import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Button } from '@material-ui/core';
import { TaskInterface } from '../../../../pages/WorkCountdown/WorkCountdown';

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
              />
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary={task.taskName}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="Play">
                <PlayCircleOutlineIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>)}
      </List>
      <div className={classes.buttonContainer}>
        <Button color="secondary">MORE</Button>
      </div>
    </div>
  );
}
