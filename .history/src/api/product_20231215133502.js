export const getProduct = async () => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product`).then(
    (res) => {
      return res.json();
    }
  );
};
export const getProductNew = async () => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/new`
  ).then((res) => {
    return res.json();
  });
};
export const getProductByType = async (urlDetail) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/type/${
      urlDetail.type
    }`
  ).then((res) => {
    return res.json();
  });
};
export const getProductDetail = async (urlDetail) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/detail/get/${
      urlDetail.idType
    }/${urlDetail.idProduct}`
  ).then((res) => {
    return res.json();
  });
};
export const getProductByKeyword = async (urlDetail) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/search/${
      urlDetail.keyword
    }`
  ).then((res) => {
    return res.json();
  });
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
  ).then((res) => {
    return res.json();
  });
};
export const uploadImageProductToS3 = async (file) => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/upload/product`, {
    method: "POST",
    body: file,
  }).then((res) => {
    return res.json();
  });
};
export const uploadImageProductToSV = async (idProduct, file) => {
  return fetch(
    `${
      import.meta.env.VITE_REACT_APP_URL_SERVER
    }/api/product/image/add/${idProduct}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(file),
    }
  ).then((res) => {
    return res.json();
  });
};
export const productUpdate = async (bodyData, urlDetail) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/update/${
      urlDetail.idType
    }/${urlDetail.idProduct}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    }
  ).then((res) => {
    return res.json();
  });
};
export const deleteProductOne = async (urlDetail) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/delete/${
      urlDetail.idProduct
    }`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    return res.json();
  });
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
  ).then((res) => {
    return res.json();
  });
};

export const insertNewType = async() => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/product/list/delete`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    }
  ).then((res) => {
    return res.json();
  });
}
