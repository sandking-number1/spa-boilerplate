import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Home from '../home/loadable'
import About from '../about/loadable'
import NoMatch from '../noMatch/loadable'
import Login from '../login/loadable'
import Logout from '../logout/loadable'
import * as ROUTES from '../../config/routes'

import makePrivate from '../privateRoute';

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
        </header>

        <Switch>
            <Route exact path={ROUTES.HOME} component={makePrivate(Home)}/>
            <Route exact path={ROUTES.ABOUT_US} component={makePrivate(About)}/>
            <Route exact path={ROUTES.LOGIN} component={Login}/>
            <Route exact path={ROUTES.LOGOUT}  component={Logout}/>
            <Route path={ROUTES.ANY} component={makePrivate(NoMatch)}/>
        </Switch>

    </div>
);

export default App