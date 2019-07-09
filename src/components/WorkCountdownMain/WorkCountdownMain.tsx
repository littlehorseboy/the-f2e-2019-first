import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme: Theme): Record<'root' | 'bgPink' | 'bgBlue', CSSProperties | (() => CSSProperties)> => createStyles({
  root: {
    padding: 0,
  },
  bgPink: {
    backgroundColor: '#FFEDF7',
  },
  bgBlue: {
    backgroundColor: '#003164',
  },
}));

export default function WorkCountdownMain(): JSX.Element {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={5} className={classes.bgPink}>
          <div>add a new mission…</div>
          <div>the First thing to do today</div>
          <div>25:00</div>
          <div>the second thing to do today</div>
          <div>the third thing to do today</div>
          <div>the forth thing to do today</div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} className={classes.bgPink}>
              <div>add a new mission…</div>
              <div>the First thing to do today</div>
              <div>25:00</div>
              <div>the second thing to do today</div>
              <div>the third thing to do today</div>
              <div>the forth thing to do today</div>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.bgBlue}>
              <div>add a new mission…</div>
              <div>the First thing to do today</div>
              <div>25:00</div>
              <div>the second thing to do today</div>
              <div>the third thing to do today</div>
              <div>the forth thing to do today</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={2} className={classes.bgBlue}>
        </Grid>
      </Grid>
    </Container>
  );
}
