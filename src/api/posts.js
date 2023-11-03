export const getPosts = async() => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/posts/`).then(res => {return res.json()})
}
export const insertPosts = async(token,data) => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/posts/insert`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        },
        body:JSON.stringify(data)
    }).then(res => {return res.json()})
}
export const uploadImagePostToS3 = async(file) => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/upload/posts`,{
        method:'POST',
        body:file
    }).then(res => {return res.json()})
}