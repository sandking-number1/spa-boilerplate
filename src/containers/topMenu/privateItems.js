import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {getAuthUser} from '../../utils/authentication';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../config/routes'

class PrivateItems extends PureComponent {

    render() {

        return (<Navbar.Collapse>
            <Nav>
                <IndexLinkContainer to={ROUTES.HOME}>
                    <NavItem>Home</NavItem>
                </IndexLinkContainer>

                <LinkContainer to={ROUTES.ABOUT}>
                    <NavItem>
                        About
                    </NavItem>
                </LinkContainer>

                <LinkContainer to={ROUTES.LOGOUT}>
                    <NavItem id="logout-btn">
                        Logout
                    </NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>);
    }
}

const mapStateToProps = (state) => ({
    authUser: getAuthUser(state),
});

PrivateItems = withRouter(connect(mapStateToProps)(PrivateItems));

export default PrivateItems;