import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { MatchLocationProps } from '../../../router/Router';
import FirstPlayCirclePane from './FirstPlayCirclePane/FirstPlayCirclePane';

const useStyles = makeStyles((theme: Theme): Record<'root' | 'link' | 'button' | 'buttonGreyColor'
, CSSProperties | (() => CSSProperties)> => createStyles({
  root: {
    paddingLeft: 85,
    paddingRight: 30,
    paddingTop: 48,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    fontSize: '2rem',
    fontWeight: 'bold',
    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
  buttonGreyColor: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
}));

export default function BigLinkMenu(props: MatchLocationProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div>
          <Link to="/todolist" className={classes.link}>
            <Button
              color="secondary"
              className={classNames(
                classes.button,
                { [classes.buttonGreyColor]: props.match && props.match.path !== '/todolist' },
              )}
            >
              <ListIcon fontSize="large" />
              TO-DO LIST
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/analytics" className={classes.link}>
            <Button
              color="secondary"
              className={classNames(
                classes.button,
                { [classes.buttonGreyColor]: props.match && props.match.path !== '/analytics' },
              )}
            >
              <AssessmentIcon fontSize="large" />
              ANALYTICS
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/ringtones" className={classes.link}>
            <Button
              color="secondary"
              className={classNames(
                classes.button,
                { [classes.buttonGreyColor]: props.match && props.match.path !== '/ringtones' },
              )}
            >
              <LibraryMusicIcon fontSize="large" />
              RINGTONES
            </Button>
          </Link>
        </div>
      </div>

      <FirstPlayCirclePane />
    </div>
  );
}
