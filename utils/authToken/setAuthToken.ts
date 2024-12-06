export const setAuthToken = (tokenName:string, authToken: string) => {
    document.cookie = `${tokenName}=${authToken}; max-age=2592000`;
}