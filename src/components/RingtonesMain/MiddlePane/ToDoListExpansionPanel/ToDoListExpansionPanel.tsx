import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme): Record<'expansionPanels' | 'expansionPanel'
| 'expansionPanelSummary' | 'heading' | 'group', CSSProperties | (() => CSSProperties)> => createStyles({
  expansionPanels: {

  },
  expansionPanel: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    '& svg': {
      color: '#FFFFFF',
    },
    '& .Mui-checked svg': {
      color: 'inherit',
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
  group: {
    '& > div': {
      display: 'flex',
      '& > label': {
        width: 'calc(100% / 3)',
      },
    },
  },
}));

export default function MiddlePane(): JSX.Element {
  const classes = useStyles();

  const [workValue, setWorkValue] = React.useState('default');
  const [breakValue, setBreakValue] = React.useState('alert');

  const workHandleChange = (event: React.ChangeEvent<{}>): void => {
    setWorkValue((event.target as HTMLInputElement).value);
  };
  const breakHandleChange = (event: React.ChangeEvent<{}>): void => {
    setBreakValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className={classes.expansionPanels}>
      <ExpansionPanel className={classes.expansionPanel} defaultExpanded={true}>
        <ExpansionPanelSummary
          className={classes.expansionPanelSummary}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>WORK</Typography>
        </ExpansionPanelSummary>

        <RadioGroup
          className={classes.group}
          value={workValue}
          onChange={workHandleChange}
        >
          <div>
            {['none', 'default', 'alarm'].map((value): JSX.Element => (
              <FormControlLabel
                key={value} value={value} control={<Radio />} label={value.toUpperCase()}
              />
            ))}
          </div>
          <div>
            {['alert', 'beep', 'bell'].map((value): JSX.Element => (
              <FormControlLabel
                key={value} value={value} control={<Radio />} label={value.toUpperCase()}
              />
            ))}
          </div>
          <div>
            {['bird', 'bugle', 'digital'].map((value): JSX.Element => (
              <FormControlLabel
                key={value} value={value} control={<Radio />} label={value.toUpperCase()}
              />
            ))}
          </div>
          <div>
            {['drop', 'horn', 'music'].map((value): JSX.Element => (
              <FormControlLabel
                key={value} value={value} control={<Radio />} label={value.toUpperCase()}
              />
            ))}
          </div>
          <div>
            {['ring', 'warning', 'whistle'].map((value): JSX.Element => (
              <FormControlLabel
                key={value} value={value} control={<Radio />} label={value.toUpperCase()}
              />
            ))}
          </div>
        </RadioGroup>
      </ExpansionPanel>

      <ExpansionPanel className={classes.expansionPanel} defaultExpanded={true}>
        <ExpansionPanelSummary
          className={classes.expansionPanelSummary}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>BREAK</Typography>
        </ExpansionPanelSummary>

        <RadioGroup
          className={classes.group}
          value={breakValue}
          onChange={breakHandleChange}
        >
          <div>
            {['none', 'default', 'alarm'].map((value): JSX.Element => (
              <FormControlLabel
                key={value} value={value} control={<Radio />} label={value.toUpperCase()}
              />
            ))}
          </div>
          <div>
            {['alert', 'beep', 'bell'].map((value): JSX.Element => (
              <FormControlLabel
                key={value} value={value} control={<Radio />} label={value.toUpperCase()}
              />
            ))}
          </div>
          <div>
            {['bird', 'bugle', 'digital'].map((value): JSX.Element => (
              <FormControlLabel
                key={value} value={value} control={<Radio />} label={value.toUpperCase()}
              />
            ))}
          </div>
          <div>
            {['drop', 'horn', 'music'].map((value): JSX.Element => (
              <FormControlLabel
                key={value} value={value} control={<Radio />} label={value.toUpperCase()}
              />
            ))}
          </div>
          <div>
            {['ring', 'warning', 'whistle'].map((value): JSX.Element => (
              <FormControlLabel
                key={value} value={value} control={<Radio />} label={value.toUpperCase()}
              />
            ))}
          </div>
        </RadioGroup>
      </ExpansionPanel>
    </div>
  );
}
