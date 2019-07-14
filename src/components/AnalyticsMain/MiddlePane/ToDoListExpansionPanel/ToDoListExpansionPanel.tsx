import React from 'react';
import { useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import LensIcon from '@material-ui/icons/Lens';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TaskInterface } from '../../../../pages/WorkCountdown/WorkCountdown';
import { changeTaskDone } from '../../../../actions/toDoList/toDoList';

const useStyles = makeStyles((theme: Theme): Record<'expansionPanels' | 'expansionPanel'
| 'expansionPanelSummary' | 'heading' | 'listItem', CSSProperties | (() => CSSProperties)> => createStyles({
  expansionPanels: {

  },
  expansionPanel: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    '& svg': {
      color: '#FFFFFF',
    },
  },
  expansionPanelSummary: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 'bold',
    flexGrow: 1,
  },
  listItem: {
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  },
}));

interface Props {
  tasks: TaskInterface[];
}

export default function MiddlePane(props: Props): JSX.Element {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChangeTaskDone = (task: TaskInterface): void => {
    dispatch(changeTaskDone(task));
  };

  return (
    <div className={classes.expansionPanels}>
      <ExpansionPanel className={classes.expansionPanel} defaultExpanded={true}>
        <ExpansionPanelSummary
          className={classes.expansionPanelSummary}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>FOCUS TIME</Typography>
        </ExpansionPanelSummary>

        <List disablePadding>
          {props.tasks
            .filter((task): boolean => !task.done)
            .map((task): JSX.Element => <ListItem
              key={task.taskId}
              className={classes.listItem}
              dense button divider
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleOutlineIcon />}
                  checked={task.done}
                  onChange={(): void => handleChangeTaskDone(task)}
                />
              </ListItemIcon>
              <ListItemText primary={task.taskName.toUpperCase()} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Play">
                  <PlayCircleOutlineIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>)}
        </List>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expansionPanel} defaultExpanded={true}>
        <ExpansionPanelSummary
          className={classes.expansionPanelSummary}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>CHART</Typography>
          <Typography component="div">
            &lt;
            {`${new Date(2019, 6, 1).getFullYear()}.${new Date(2019, 6, 1).getMonth() + 1}.${new Date(2019, 6, 1).getDate()}`}
            -
            {`${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`}
            &gt;
          </Typography>
        </ExpansionPanelSummary>

        <List disablePadding>
          {props.tasks
            .filter((task): boolean => task.done)
            .map((task): JSX.Element => <ListItem
              key={task.taskId}
              className={classes.listItem}
              dense button divider
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleOutlineIcon />}
                  checked={task.done}
                  onChange={(): void => handleChangeTaskDone(task)}
                />
              </ListItemIcon>
              <ListItemText primary={task.taskName.toUpperCase()} />
              <ListItemSecondaryAction>
                {new Array(task.workCount).fill('').map((n, index): JSX.Element => <LensIcon key={index} fontSize="small" />)}
              </ListItemSecondaryAction>
            </ListItem>)}
        </List>
      </ExpansionPanel>
    </div>
  );
}
