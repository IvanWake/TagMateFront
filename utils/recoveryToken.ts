export const getRecoveryToken = () => {
    if (typeof window === 'undefined') return undefined;
    
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + 'recoveryToken'.replace(/([\.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const setRecoveryToken = (recoveryToken: string) => {
    if (typeof window === 'undefined') return;
    
    // храним на 1 час
    document.cookie = `recoveryToken=${recoveryToken}; max-age=3600; path=/`;
}

export const deleteRecoveryToken = () => {
    if (typeof window === 'undefined') return;
    
    document.cookie = `recoveryToken=; Max-Age=-1; path=/`;
}