export const type = async() => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/statistical/revenue/type`).then(res => {return res.json()})
}

export const total = async() => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/statistical/revenue/total`).then(res => {return res.json()})
}
export const month = async() => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/statistical/revenue/month`).then(res => {return res.json()})
}

export const view = async() => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/statistical/view`).then(res => {return res.json()})
}

export const selling = async() => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/statistical/bestselling`).then(res => {return res.json()})
}