import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import LeftPane from '../WorkCountdownMain/LeftPane/LeftPane';
// import MiddlePane from '../WorkCountdownMain/MiddlePane/MiddlePane';
// import RightPane from '../WorkCountdownMain/RightPane/RightPane';
import ListIcon from '@material-ui/icons/List';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { TaskInterface } from '../../pages/WorkCountdown/WorkCountdown';
import { MatchLocationProps } from '../../router/Router';

const useStyles = makeStyles({
  root: {
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: '#003164',
  },
  leftPane: {

  },
  middlePane: {
    position: 'relative',
  },
  rightPane: {
  },
});

interface Props extends MatchLocationProps {
  tasks: TaskInterface[];
}

export default function LeftPane(props: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={5} className={classes.leftPane}>
          <div>
            <Link to="/todolist">
              <Button color="secondary">
                <ListIcon />
                TO-DO LIST
              </Button>
            </Link>
          </div>
          <div>
            <Link to="/todolist">
              <Button color="secondary">
                <AssessmentIcon />
                ANALYTICS
              </Button>
            </Link>
          </div>
          <div>
            <Link to="/todolist">
              <Button color="secondary">
                <LibraryMusicIcon />
                RINGTONES
              </Button>
            </Link>
          </div>
          {/* <LeftPane tasks={props.tasks} selectedTaskId={'123'} /> */}
        </Grid>

        <Grid item xs={12} sm={12} md={6} className={classes.middlePane}>
          {/* <MiddlePane /> */}
        </Grid>

        <Grid item xs={12} sm={12} md={1} className={classes.rightPane}>
          {/* <RightPane /> */}
        </Grid>
      </Grid>
    </Container>
  );
}
