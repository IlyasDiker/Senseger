const _inner = {
    ACCOUNT_KEY : 'SENSEGER.ACCOUNT',

    sessionAccount: null,
}

export const getAccount = async () => {
    let rs = localStorage.getItem(_inner.ACCOUNT_KEY)
    if(rs){
        return JSON.parse(rs);
    }else {
        return null;
    }
}

export const setAccount = async (data) => {
    _inner.sessionAccount = data;
    localStorage.setItem(_inner.ACCOUNT_KEY, JSON.stringify(data));
    return data;
}

export const logoutAccount = () => {
    _inner.sessionAccount = null;
    localStorage.removeItem(_inner.ACCOUNT_KEY);
}

export const setSession = (account) => {
    if(account){
        _inner.sessionAccount = account;
    }
}
export const getSession = () => {
    return _inner.sessionAccount;
}


window.getAccount = getAccount;
window.setAccount = setAccount;
window.getSession = getSession;
