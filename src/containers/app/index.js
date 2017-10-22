import React from 'react';
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import withUserAgent from 'react-useragent';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux'
import {Grid} from 'react-bootstrap';
import Home from '../home/loadable'
import About from '../about/loadable'
import NoMatch from '../noMatch/loadable'
import Login from '../login/loadable'
import Logout from '../logout/loadable'
import * as ROUTES from '../../config/routes'
import TopMenu from '../topMenu'
import {isAuthenticated, hasAuthUser} from '../../utils/authentication'
import * as actions from './actions'

import makePrivate from '../privateRoute';

class App extends React.PureComponent {

    fetchAuthUserIfNeeded() {
        const {fetchAuthUser, isAuthenticated, hasAuthUser} = this.props;

        if (isAuthenticated && !hasAuthUser) {
            fetchAuthUser();
        }

    }

    componentDidUpdate() {
        this.fetchAuthUserIfNeeded();
    }

    componentDidMount() {
        this.fetchAuthUserIfNeeded();
    }

    render() {

        const {ua, location} = this.props;
        let pathname = location.pathname.split("/") || [];
        pathname = pathname.filter((i) => !!i);
        let section = Array.isArray(pathname) && pathname.length > 0 ? pathname[0] : "";

        return (
            <Grid
                data-desktop={!ua.mobile}
                data-mobile={ua.mobile}
                data-tablet={ua.tablet}
                data-os={ua.os}
                data-section={section}
                fluid
                className="main-app-container">

                <TopMenu/>

                <Switch>
                    <Route exact path={ROUTES.HOME} component={makePrivate(Home)}/>
                    <Route exact path={ROUTES.ABOUT} component={makePrivate(About)}/>
                    <Route exact path={ROUTES.LOGIN} component={Login}/>
                    <Route exact path={ROUTES.LOGOUT} component={Logout}/>
                    <Route path={ROUTES.ANY} component={makePrivate(NoMatch)}/>
                </Switch>
                
            </Grid> );

    }

}

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(),
    hasAuthUser: hasAuthUser(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

App = withRouter(withUserAgent(connect(mapStateToProps, mapDispatchToProps)(App)));

export default App;