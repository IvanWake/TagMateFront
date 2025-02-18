
export const getAuthToken = (tokenName: string) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + tokenName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const setAuthToken = (tokenName:string, authToken: string) => {
    document.cookie = `${tokenName}=${authToken}; max-age=2592000; path=/`;
}

export const deleteAuthToken = (tokenName: string) => {
    document.cookie = `${tokenName}=; Max-Age=-1;`;
}