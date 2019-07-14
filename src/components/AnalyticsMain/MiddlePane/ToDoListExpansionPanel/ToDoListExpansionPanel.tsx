import React, { useRef, useEffect } from 'react';
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

  const canvasEl = useRef(null);

  useEffect((): void => {
    // eslint-disable-next-line no-new
    new Chart(canvasEl.current as any, {
      type: 'bar',
      data: {
        labels: ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'],
        datasets: [{
          label: 'TOMATOS',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
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
              <span>20</span>
              <span>/TOMATO</span>
            </div>
          </div>
          <div>
            <div>WEEK</div>
            <div>
              <span>108</span>
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
            {`${new Date(2019, 6, 1).getFullYear()}.${new Date(2019, 6, 1).getMonth() + 1}.${new Date(2019, 6, 1).getDate()}`}
            -
            {`${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`}
            &gt;
          </Typography>
        </ExpansionPanelSummary>

        <canvas ref={canvasEl}></canvas>
      </ExpansionPanel>
    </div>
  );
}
