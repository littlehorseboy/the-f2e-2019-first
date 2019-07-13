import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HashRouter, Route, match } from 'react-router-dom';
import H from 'history';
import { makeStyles } from '@material-ui/core/styles';
import WorkCountdown from '../pages/WorkCountdown/WorkCountdown';

const routes = [
  { path: '/', Component: WorkCountdown },

];

const useStyles = makeStyles({
  page: {
    fontFamily: 'system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
    transition: 'opacity 250ms ease-in',
    '&-enter': {
      opacity: 0.1,
    },
    '&-enter-done': {
      opacity: 1,
    },
    '&-exit': {
      opacity: 1,
    },
    '&-exit-done': {
      opacity: 0.1,
    },
  },
});

export interface RouteComponentProps<P> {
  match: match<P>;
  loaction: H.Location;
  history: H.History;
  staticContext?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface Match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

export default function Router(): JSX.Element {
  const classes = useStyles();

  return (
    <HashRouter>
      {routes.map(({ path, Component }): JSX.Element => (
        <Route key={path} exact path={path}>
          {(ooo): JSX.Element => (
            <CSSTransition
              in={ooo.match != null}
              timeout={300}
              classNames={classes.page}
              unmountOnExit
            >
              <div className={classes.page}>
                <Component match={ooo.match} location={ooo.location} />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </HashRouter>
  );
}
