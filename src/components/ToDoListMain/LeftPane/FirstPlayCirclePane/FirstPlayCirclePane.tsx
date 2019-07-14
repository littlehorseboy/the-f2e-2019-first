import React from 'react';
// import classNames from 'classnames';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme: Theme): Record<'firstPlayCirclePane' | 'playCircle'
| 'playCircleContent' | 'ponodoroTime' | 'taskName' | 'fabContainer' | 'fab' | 'playArrowIcon'
, CSSProperties | (() => CSSProperties)> => createStyles({
  firstPlayCirclePane: {
    display: 'flex',
    justifyContent: 'center',
  },
  playCircle: {
    width: 700,
    height: 350,
    borderTopLeftRadius: 700,
    borderTopRightRadius: 700,
    [theme.breakpoints.down('lg')]: {
      width: 500,
      height: 250,
      borderTopLeftRadius: 500,
      borderTopRightRadius: 500,
    },
    [theme.breakpoints.down('md')]: {
      width: 400,
      height: 200,
      borderTopLeftRadius: 400,
      borderTopRightRadius: 400,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(6),
      width: 340,
      height: 170,
      borderTopLeftRadius: 340,
      borderTopRightRadius: 340,
    },
    backgroundColor: '#FFEDF7',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playCircleContent: {
    textAlign: 'center',
  },
  ponodoroTime: {
    fontSize: '5rem',
    fontWeight: 'bold',
    color: '#FF4384',
  },
  taskName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#003164',
  },
  fabContainer: {
    position: 'absolute',
    top: 0,
    transform: 'translateY(-50%)',
  },
  fab: {
    boxShadow: '0 0 0 3px #003164, 0 0 0 5px #FF4384, 0 0 0 9px #003164',
  },
  playArrowIcon: {
    fontSize: '2rem',
  },
}));

export default function LeftPane(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.firstPlayCirclePane}>
      <div className={classes.playCircle}>
        <div className={classes.fabContainer}>
          <Fab className={classes.fab} color="secondary">
            <PlayArrowIcon className={classes.playArrowIcon} />
          </Fab>
        </div>
        <div className={classes.playCircleContent}>
          <div className={classes.ponodoroTime}>
            25:00
          </div>
          <div className={classes.taskName}>
            {'the First thing to do today'.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}
