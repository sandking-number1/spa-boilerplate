import {LOGIN_SUCCESS, LOGIN_ERROR} from '../containers/login/constants';
import {LOGOUT_SUCCESS} from '../containers/logout/constants';
import {FETCH_AUTH_USER_SUCCESS, FETCH_AUTH_USER_ERROR} from '../containers/app/constants';

const initialState = {};

function tokenReducer(state = initialState, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, ...action.response.data};
        case LOGIN_ERROR:
            return {error: action.message};
        case LOGOUT_SUCCESS:
            return initialState;
        case FETCH_AUTH_USER_SUCCESS:
            const entities = action.response.entities;
            const id = action.response.result;
            return  entities.users[id];
        case FETCH_AUTH_USER_ERROR:
            return { error: action.message };
        default:
            return state;
    }
}

export default tokenReducer;