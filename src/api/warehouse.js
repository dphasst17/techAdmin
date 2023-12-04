export const getAllWare = async () => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/ware`).then(
    (res) => {
      return res.json();
    }
  );
};
export const getTotalProduct = async () => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/ware/total`
  ).then((res) => {
    return res.json();
  });
};
export const insertWarehouse = async (token) => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/ware/insert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.json();
  });
};
