export const getAuthToken = (tokenName: string) => {
    if (typeof window === 'undefined') return undefined;
    
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + tokenName.replace(/([\.$?*|{}$$$$\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const setAuthToken = (tokenName: string, authToken: string) => {
    if (typeof window === 'undefined') return;
    
    document.cookie = `${tokenName}=${authToken}; max-age=2592000; path=/`;
}

export const deleteAuthToken = (tokenName: string) => {
    if (typeof window === 'undefined') return;
    
    document.cookie = `${tokenName}=; Max-Age=-1;`;
}
