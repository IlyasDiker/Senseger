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
    localStorage.setItem(_inner.ACCOUNT_KEY, JSON.stringify(data));
    return data;
}

export const setSession = (account) => {
    if(account){
        _inner.sessionAccount = account;
    }
}
export const getSession = () => {
    return _inner.sessionAccountt;
}


window.getAccount = getAccount;
window.setAccount = setAccount;
