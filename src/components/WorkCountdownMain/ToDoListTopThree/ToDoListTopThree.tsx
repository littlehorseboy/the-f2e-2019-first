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

export default function ToDoListTopThree(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ListItem dense button divider>
          <ListItemIcon>
            <Checkbox
              edge="start"
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
            />
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary="the second thing to do today"
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Play">
              <PlayCircleOutlineIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem dense button divider>
          <ListItemIcon>
            <Checkbox
              edge="start"
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
            />
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary="the third thing to do today"
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Play">
              <PlayCircleOutlineIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem dense button divider>
          <ListItemIcon>
            <Checkbox
              edge="start"
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
            />
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary="the forth thing to do today"
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Play">
              <PlayCircleOutlineIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <div className={classes.buttonContainer}>
        <Button color="secondary">MORE</Button>
      </div>
    </div>
  );
}
