import React, { useRef, useEffect } from 'react';
import {
  format,
  subDays,
  isSameDay,
  differenceInDays,
} from 'date-fns';
import Chart from 'chart.js';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TaskInterface } from '../../../../pages/WorkCountdown/WorkCountdown';

const useStyles = makeStyles((theme: Theme): Record<'expansionPanels' | 'expansionPanel'
| 'expansionPanelSummary' | 'heading' | 'focusTimeContainer', CSSProperties | (() => CSSProperties)> => createStyles({
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
  focusTimeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    '& > div > div:first-child': {
      fontWeight: 'bold',
    },
    '& > div > div:last-child': {
      fontWeight: 'bold',
      '& > span:first-child': {
        fontSize: '2.5rem',
        color: '#FF4384',
      },
      '& > span:last-child': {
        marginLeft: theme.spacing(0.25),
        color: 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
}));

interface Props {
  tasks: TaskInterface[];
}

export default function MiddlePane(props: Props): JSX.Element {
  const classes = useStyles();

  const canvasEl = useRef<HTMLCanvasElement>(null);

  useEffect((): void => {
    const currentDate = new Date();

    // eslint-disable-next-line no-new
    new Chart(canvasEl.current as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: [
          format(subDays(currentDate, 6), 'M/D'),
          format(subDays(currentDate, 5), 'M/D'),
          format(subDays(currentDate, 4), 'M/D'),
          format(subDays(currentDate, 3), 'M/D'),
          format(subDays(currentDate, 2), 'M/D'),
          format(subDays(currentDate, 1), 'M/D'),
          format(currentDate, 'M/D'),
        ],
        datasets: [{
          label: 'TOMATOES',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [
            props.tasks.filter(
              (task): boolean => differenceInDays(new Date(), task.doneTime as Date) === 6,
            ).length,
            props.tasks.filter(
              (task): boolean => differenceInDays(new Date(), task.doneTime as Date) === 5,
            ).length,
            props.tasks.filter(
              (task): boolean => differenceInDays(new Date(), task.doneTime as Date) === 4,
            ).length,
            props.tasks.filter(
              (task): boolean => differenceInDays(new Date(), task.doneTime as Date) === 3,
            ).length,
            props.tasks.filter(
              (task): boolean => differenceInDays(new Date(), task.doneTime as Date) === 2,
            ).length,
            props.tasks.filter(
              (task): boolean => differenceInDays(new Date(), task.doneTime as Date) === 1,
            ).length,
            props.tasks
              .filter((task): boolean => isSameDay(new Date(), task.doneTime as Date)).length],
        }],
      },
      options: {},
    });
  }, []);

  return (
    <div className={classes.expansionPanels}>
      <ExpansionPanel className={classes.expansionPanel} defaultExpanded={true}>
        <ExpansionPanelSummary
          className={classes.expansionPanelSummary}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>FOCUS TIME</Typography>
        </ExpansionPanelSummary>

        <div className={classes.focusTimeContainer}>
          <div>
            <div>TODAY</div>
            <div>
              <span>
                {props.tasks.filter(
                  (task): boolean => isSameDay(new Date(), task.doneTime as Date),
                ).length}
              </span>
              <span>/TOMATO</span>
            </div>
          </div>
          <div>
            <div>WEEK</div>
            <div>
              <span>
                {props.tasks.filter(
                  (task): boolean => differenceInDays(new Date(), task.doneTime as Date) <= 7,
                ).length}
              </span>
              <span>/TOMATO</span>
            </div>
          </div>
        </div>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expansionPanel} defaultExpanded={true}>
        <ExpansionPanelSummary
          className={classes.expansionPanelSummary}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>CHART</Typography>
          <Typography component="div">
            &lt;
            {format(subDays(new Date(), 6), 'YYYY.M.D')}
            -
            {format(new Date(), 'YYYY.M.D')}
            &gt;
          </Typography>
        </ExpansionPanelSummary>

        <canvas ref={canvasEl}></canvas>
      </ExpansionPanel>
    </div>
  );
}
