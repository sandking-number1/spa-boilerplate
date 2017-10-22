export const logout = () => {
    return new Promise();
};

export const login = () => {
    return new Promise((resolve, reject) => {

        resolve({
            data: {
                userId: "fake-user-id-123",
                id: "fake-token-123"
            }
        })
    });
};