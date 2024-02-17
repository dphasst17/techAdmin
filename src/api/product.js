export const getProduct = async () => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product`)
  .then((res) => res.json());
};
export const getProductNew = async () => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/new`
  ).then((res) => res.json());
};
export const getProductByType = async (urlDetail) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/type/${urlDetail.type
    }`
  ).then((res) => res.json());
};
export const getProductDetail = async (urlDetail) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/detail/get/${urlDetail.idType
    }/${urlDetail.idProduct}`
  ).then((res) => res.json());
};
export const getProductByKeyword = async (urlDetail) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/search/${urlDetail.keyword
    }`
  ).then((res) => res.json());
};
export const postProductInsert = async (bodyData) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/insert`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    }
  ).then((res) => res.json());
};
export const uploadImageProductToS3 = async (file) => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/upload/product`, {
    method: "POST",
    body: file,
  }).then((res) => res.json());
};
export const uploadImageProductToSV = async (idProduct, file) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER
    }/api/product/image/add/${idProduct}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(file),
    }
  ).then((res) => res.json());
};
export const productUpdate = async (bodyData, urlDetail) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/update/${urlDetail.nameType
    }/${urlDetail.idProduct}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    }
  ).then((res) => res.json());
};
export const deleteProductOne = async (urlDetail) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/delete/${urlDetail.idProduct
    }`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};
export const deleteProductList = async (bodyData) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/list/delete`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    }
  ).then((res) => res.json());
};

export const insertNewType = async (bodyData) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/insert/type`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    }
  ).then((res) => res.json());
}
export const getInfoType = async () => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/info/type`)
    .then((res) => res.json());
}
export const createEvent = async(data) => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/sale`,{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  })
  .then((res) => res.json());
}
export const editEvent = async(data) => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/sale`,{
    method:"PATCH",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  })
  .then((res) => res.json());
}
export const deleteEvent = async(id) => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/sale`,{
    method:"DELETE",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({idSale:id})
  })
  .then((res) => res.json());
}
export const getSaleEvent = async() => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/sale/all`)
  .then((res) => res.json());
}
export const getSaleEventDetail = async(idSale) => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/sale/detail/${idSale}`)
  .then((res) => res.json());
}
