import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Navbar} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import {isAuthenticated} from '../../utils/authentication';
import PublicItems from './publicItems'
import ProtectedItems from './privateItems'
import * as ROUTES from '../../config/routes'

class TopMenu extends PureComponent {

    render() {
        const {isAuthenticated} = this.props;

        return (<Navbar collapseOnSelect fluid>

            <Navbar.Header>
                <Navbar.Brand>

                    <div className="brand-holder">
                        <Link to={ROUTES.HOME}> Home </Link>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>

            {isAuthenticated ? <ProtectedItems/> : <PublicItems/>}

        </Navbar>);
    }
}


const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(),
});

TopMenu = withRouter(connect(mapStateToProps)(TopMenu));

export default TopMenu;