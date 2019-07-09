import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import AddNewMission from '../UI/AddNewMission/AddNewMission';

const useStyles = makeStyles((theme: Theme): Record<
'root' | 'leftPane' | 'middlePane' | 'middleContaiberPane' | 'middleLeftPane' | 'middleRightPane' |
'rightPane' | 'fabContainer' | 'fab', CSSProperties | (() => CSSProperties)
> => createStyles({
  root: {
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
  },
  leftPane: {
    backgroundColor: '#FFEDF7',
    '& > div': {
      paddingLeft: 85,
      paddingRight: 30,
      paddingTop: 48,
      paddingBottom: 48,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
  middlePane: {
    position: 'relative',
  },
  middleContaiberPane: {
    height: '100%',
  },
  middleLeftPane: {
    backgroundColor: '#FFEDF7',
  },
  middleRightPane: {
    backgroundColor: '#003164',
  },
  rightPane: {
    backgroundColor: '#003164',
  },
  fabContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    width: 540,
    height: 540,
    border: '3px solid transparent',
    outline: '3px solid transparent',
  },
}));

export default function WorkCountdownMain(): JSX.Element {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={5} className={classes.leftPane}>
          <div>
            <AddNewMission />
            <div>
              <FormControlLabel
                control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} value="checkedH" />}
                label="Custom icon"
              />
              <div>the First thing to do today</div>
              <div>25:00</div>
            </div>
            <div>
              <div>the second thing to do today</div>
              <div>the third thing to do today</div>
              <div>the forth thing to do today</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={5} className={classes.middlePane}>
          <Grid container spacing={0} className={classes.middleContaiberPane}>
            <Grid item xs={12} sm={6} className={classes.middleLeftPane}></Grid>
            <Grid item xs={12} sm={6} className={classes.middleRightPane}></Grid>
          </Grid>
          <div className={classes.fabContainer}>
            <Fab className={classes.fab} color="secondary" />
          </div>
        </Grid>
        <Grid item xs={12} sm={2} className={classes.rightPane}>
        </Grid>
      </Grid>
    </Container>
  );
}
