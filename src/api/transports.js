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
export const transUpdateShipper = async (idTrans, idShipper) => {
  return fetch(
    `${
      import.meta.env.VITE_REACT_APP_URL_SERVER
    }/api/transports/update/shipper/${idTrans}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shipper: idShipper }),
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
export const successTrans = async(idTrans) => {
  return fetch(
    `${
      import.meta.env.VITE_REACT_APP_URL_SERVER
    }/api/transports/success`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({id:idTrans})
    }
  ).then((res) => {
    return res.json();
  });
}
export const failTrans = async(idTrans) => {
  return fetch(
    `${
      import.meta.env.VITE_REACT_APP_URL_SERVER
    }/api/transports/fail`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({id:idTrans})
    }
  ).then((res) => {
    return res.json();
  });
}
