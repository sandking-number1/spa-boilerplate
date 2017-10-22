import {FETCH_AUTH_USER_REQUEST, FETCH_AUTH_USER_SUCCESS, FETCH_AUTH_USER_ERROR} from './constants';
import * as api from '../../api';
import {normalize} from 'normalizr';
import {user} from '../../schemas/user'

export const fetchAuthUser = () => (dispatch) => {

    dispatch({
        type: FETCH_AUTH_USER_REQUEST,
    });

    return api.fetchAuthUser().then(
        (response) => {
            dispatch({
                type: FETCH_AUTH_USER_SUCCESS,
                response: normalize(response, user),
            });
        },
        (error) => {
            dispatch({
                type: FETCH_AUTH_USER_ERROR,
                message: error.message || 'Something went wrong.',
            });
        });
};