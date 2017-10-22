export const logout = () => {
    return new Promise((resolve, reject) => {

        resolve()
    });
};

export const login = ({username, password} ) => {

    const users = [
        'dani',
        'nicola',
        'pippo'
    ];

    return new Promise((resolve, reject) => {

        if (users.indexOf(username) > -1) {
            resolve({
                data: {
                    userId: "fake-user-id-123",
                    id: "fake-token-123"
                }
            })
        } else {
            reject({
                message: "Invalid username or password"
            });
        }
    });
};

export const fetchAuthUser = () => {

    return new Promise((resolve, reject) => {

        resolve({
            id: "fake-token-123",
            name: 'Dani'
        })
    });
};



