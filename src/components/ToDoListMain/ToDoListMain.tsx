import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BigLinkMenu from '../UI/BigLinkMenu/BigLinkMenu';
import MiddlePane from './MiddlePane/MiddlePane';
import BackHomePane from '../UI/BackHomePane/BackHomePane';
import { TaskInterface } from '../../pages/WorkCountdown/WorkCountdown';
import { MatchLocationProps } from '../../router/Router';

const useStyles = makeStyles({
  root: {
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: '#003164',
  },
});

interface Props extends MatchLocationProps {
  tasks: TaskInterface[];
}

export default function ToDoListMain(props: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={5}>
          {/* left pane */}
          <BigLinkMenu match={props.match} location={props.location} />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <MiddlePane tasks={props.tasks} />
        </Grid>

        <Grid item xs={12} sm={12} md={1}>
          {/* right pane */}
          <BackHomePane />
        </Grid>
      </Grid>
    </Container>
  );
}
