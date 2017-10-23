import React, {PureComponent} from 'react';
import {NavItem, Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import * as ROUTES from '../../config/routes'

class PublicItems extends PureComponent {

    render() {

        return (<Navbar.Collapse>
            <Nav>
                <LinkContainer to={ROUTES.LOGIN}>
                    <NavItem>
                        Login
                    </NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>);
    }
}

export default PublicItems;