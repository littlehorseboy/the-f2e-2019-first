import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { MatchLocationProps } from '../../../router/Router';

const useStyles = makeStyles({
  root: {

  },
  link: {
    textDecoration: 'none',
  },
  buttonGreyColor: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

export default function LeftPane(props: MatchLocationProps): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <div>
        <Link to="/todolist" className={classes.link}>
          <Button
            color="secondary"
            className={classNames(
              { [classes.buttonGreyColor]: props.match && props.match.path !== '/todolist' },
            )}
          >
            <ListIcon />
            TO-DO LIST
          </Button>
        </Link>
      </div>
      <div>
        <Link to="/analytics" className={classes.link}>
          <Button
            color="secondary"
            className={classNames(
              { [classes.buttonGreyColor]: props.match && props.match.path !== '/analytics' },
            )}
          >
            <AssessmentIcon />
            ANALYTICS
          </Button>
        </Link>
      </div>
      <div>
        <Link to="/ringtones" className={classes.link}>
          <Button
            color="secondary"
            className={classNames(
              { [classes.buttonGreyColor]: props.match && props.match.path !== '/ringtones' },
            )}
          >
            <LibraryMusicIcon />
            RINGTONES
          </Button>
        </Link>
      </div>
    </>
  );
}
