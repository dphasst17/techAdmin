export const transGetAll = async () => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/transports`
  ).then((res) => {
    return res.json();
  });
};
export const transGetById = async (key) => {
  return fetch(
    `${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/transports/get/${
      key.idTrans
    }`
  ).then((res) => {
    return res.json();
  });
};
export const transUpdateStatus = async (idTrans, status) => {
  return fetch(
    `${
      import.meta.env.VITE_REACT_APP_URL_SERVER
    }/api/transports/update/${idTrans}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: status }),
    }
  ).then((res) => {
    return res.json();
  });
};
export const transDeleteAll = async (idTrans) => {
  return fetch(
    `${
      import.meta.env.VITE_REACT_APP_URL_SERVER
    }/api/transports/delete/all/${idTrans}`,
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
