import React, {PureComponent} from 'react';
import Form from './form'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import packageJson from '../../../package.json'
import {HOME} from '../../config/routes'
import {getAuthenticationError, getAuthUser, getToken} from '../../utils/authentication';
import {login} from './actions';

class Login extends PureComponent {

    componentDidUpdate() {

        /**
         *   If user has a token (valid or not) redirect to home
         *   If the token is not valid,
         *   the axios interceptor will redirect user to login page
         */
        if (getToken()) {
            const {history} = this.props;
            history.push(HOME);
        }
    }

    componentDidMount() {

        if (getToken()) {
            const {history} = this.props;
            history.push(HOME);
        }
    }

    render() {
        const  {loginError, onSubmit} = this.props;

        return (
            <div>
                <h1>Login</h1>
                {loginError && <div id="login-error-message" className="alert alert-danger">Username o password invalidi</div>}
                <Form
                    onSubmit={onSubmit}
                />
                <p>Version {packageJson.version}</p>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    authUser: getAuthUser(state),
    loginError: getAuthenticationError(state)
});

const onSubmit = (payload) => (dispatch) => {

    const credentials = {
        username: payload.username,
        password: payload.password,
    };

    login({credentials, dispatch});

};

Login = withRouter(connect(
    mapStateToProps,
    {onSubmit}
)(Login));

export default Login;
