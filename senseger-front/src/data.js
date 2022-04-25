const _inner = {
    ACCOUNT_KEY : 'SENSEGER.ACCOUNT',
    CLIENT_ID : '966660189505859646',
    CLIENT_SECRET : 'pFe22lLgQlX42bCXS1Bz3jKhWr0eA3qT',

    DISCORD_AUTH_LINK: "https://discord.com/api/oauth2/authorize?client_id=966660189505859646&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Flogin&response_type=code&scope=identify%20email",

    sessionAccount: null,
}

export const getDiscordAuthLink = () => {
    return _inner.DISCORD_AUTH_LINK;
}

export const authDiscord = async (code) => {
    try {
        const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
                client_id: _inner.CLIENT_ID,
                client_secret: _inner.CLIENT_SECRET,
                code,
                grant_type: 'authorization_code',
                redirect_uri: `http://localhost:8080/login`,
                scope: 'identify',
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const oauthData = await oauthResult.json();
        localStorage.setItem('DISCORD.LOGIN' , JSON.stringify(oauthData));
        return oauthData;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const getDiscordProfile = async () => {
    let discord_auth = JSON.parse(localStorage.getItem('DISCORD.LOGIN'));

    return await fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${discord_auth.token_type} ${discord_auth.access_token}`,
        },
    })
    .then(result => result.json())
    .then(response => {
        response.avatar_url = `https://cdn.discordapp.com/avatars/${response.id}/${response.avatar}`;
        return response;
    })
    .catch(console.error);
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
window.getDiscordProfile = getDiscordProfile;