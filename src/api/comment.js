export const commentGetAll = async () => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/comment`).then(
    (res) => {
      return res.json();
    }
  );
};
export const commentGetByProduct = async (idProduct) => {
  return fetch(
    `${
      import.meta.env.VITE_REACT_APP_URL_SERVER
    }/api/comment/product/${idProduct}`
  ).then((res) => {
    return res.json();
  });
};
export const commentDeleteOne = async (idProduct) => {
  return fetch(
    `${
      import.meta.env.VITE_REACT_APP_URL_SERVER
    }/api/comment/delete/${idProduct}`,
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
export const commentDeleteList = async (listId) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/comment/list/delete/`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ list: listId }),
    }
  ).then((res) => {
    return res.json();
  });
};
