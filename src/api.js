import axios from 'axios';

export const API = {
    host:`https://62607f5153a42eaa07057e9e.mockapi.io/`
}

export const getUsers = async () => {
    let ModelName = 'users';

    let res = await axios.get(`${API.host}${ModelName}`);
    let dataList = res.data;
    return dataList ? dataList : [];
}

export const getUser = async (index) => {
    let ModelName = 'users';

    if(index && typeof index == 'number') {
        let res = await axios.get(`${API.host}${ModelName}/${index}`);
        let dataList = res.data;
        return dataList ? dataList : [];
    } else {
        return null;
    } 
}

export const getInteractions = async () => {
    let ModelName = 'interactions';

    let res = await axios.get(`${API.host}${ModelName}`);
    let dataList = res.data;
    return dataList ? dataList : [];
}

export const getActions = async () => {
    let ModelName = 'actions';

    let res = await axios.get(`${API.host}${ModelName}`);
    let dataList = res.data;
    return dataList ? dataList : [];
}