export const getUserOne = async (token) => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/user/`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
    }).then(res => {return res.json()})
}
export const getUserByRole = async (role) => {
    let resultRole = Number(role)
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/user/role/${resultRole}`).then(res => {return res.json()})
}
export const getAllUser = async () => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/user/all`).then(res => {return res.json()})
}
export const adminLogin = async(bodyData) => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/auth/admin/login`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(bodyData)
    }).then(res => {return res.json()})
}