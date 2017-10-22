import LocalStorage from 'localStorage'

export const getAuthUser = (state) =>
    state.user;

export const getAuthUserRoles = ( state) =>
    hasAuthUser(state) ? getAuthUser(state).role : [];

export const hasRole = (state, role) =>
    getAuthUserRoles(state).indexOf(role) > -1;

export const getAuthenticationError = (state) => {
    return ""; // TODO change with state.token.error;
};

export const isAuthenticated = () => !!getToken();

export const hasAuthUser = (state) => {

    if (!getAuthUser(state) || typeof getAuthUser(state) !== "object") {
        return false;
    }

    let keys = Object.keys(getAuthUser(state));
    delete keys.error;

    return  keys.length !== 0 && getAuthUser(state).constructor === Object;
};

export const getToken = () => {
    return LocalStorage.getItem("token");
};