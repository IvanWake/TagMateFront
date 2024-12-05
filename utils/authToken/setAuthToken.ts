export const setAuthToken = (authToken: string) => {
    document.cookie = `authToken=${authToken}; max-age=2592000`;
}