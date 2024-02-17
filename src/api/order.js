export const getAllOrderSuccess = async () => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/order/success`).then(
        (res) => {
            return res.json();
        }
    );
};
export const getAllOrderFail = async () => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/order/fail`).then(
        (res) => {
            return res.json();
        }
    );
};
export const getAllOrderDetail = async (typeOrder,idOrder) => {
    return fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/api/order/detail/${typeOrder}/${idOrder}`).then(
        (res) => {
            return res.json();
        }
    );
};
