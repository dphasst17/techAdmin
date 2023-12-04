import React, { createContext, useEffect, useState } from "react";

export const StateContext = createContext();
export const StateProvider = ({ children }) => {
    const [dataProduct, setDataProduct] = useState(null);
    const [dataComment, setDataComment] = useState(null);
    const [dataOrder, setDataOrder] = useState(null);
    const [dataDiary,setDataDiary] = useState(null);
    const [dataTotal,setDataTotal] = useState(null);
    const [dataPost,setDataPost] = useState(null);
    const [dataUser, setDataUser] = useState(null);
    const [userDetail, setUserDetail] = useState(null);
    const [dataAddress,setDataAddress] = useState(null);

    const [errProduct, setErrProduct] = useState(null);
    const [errComment, setErrComment] = useState(null);
    const [errOrder, setErrOrder] = useState(null);
    const [errDiary,setErrDiary] = useState(null);
    const [errTotal,setErrTotal] = useState(null);
    const [errUser, setErrUser] = useState(null);
    const [errUDetail, setErrUDetail] = useState(null);
    const [errPost,setErrPost]= useState(null);
    const [errAddress,setErrAddress] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [disabledScroll, setDisabledScroll] = useState();
    // Update or Add new product
    const [showDetail, setShowDetail] = useState(false);
    const [formData, setFormData] = useState({});
    const [stateForm, setStateForm] = useState({ folder: 'product', product: [], detail: [] });
    //Pagination
    const [isShowPaging, setIsShowPaging] = useState(false);
    const [numPage, setNumPage] = useState();
    const [activePage, setActivePage] = useState(1)
    //Nav
    const [showNav, setShowNav] = useState(false)
    //Dark Mode
    const [dark, setDark] = useState(false);
    const darkMode = JSON.parse(localStorage.getItem('darkMode') || null)
    useEffect(() => {
        darkMode === null || darkMode === false ? setDark(false) : setDark(true)
    }, [darkMode])
    return (
        <StateContext.Provider
            value={{
                dataProduct, setDataProduct,
                dataComment, setDataComment,
                dataOrder, setDataOrder,
                dataDiary,setDataDiary,
                dataTotal,setDataTotal,
                dataPost,setDataPost,
                dataUser, setDataUser,
                userDetail, setUserDetail,
                dataAddress,setDataAddress,

                errProduct, setErrProduct,
                errComment, setErrComment,
                errOrder, setErrOrder,
                errDiary,setErrDiary,
                errTotal,setErrTotal,
                errUser, setErrUser,
                errUDetail, setErrUDetail,
                errPost,setErrPost,
                errAddress,setErrAddress,

                isLoading, setIsLoading,
                disabledScroll, setDisabledScroll,
                showDetail, setShowDetail,
                formData, setFormData,
                stateForm, setStateForm,

                dark, setDark,
                isShowPaging, setIsShowPaging,
                numPage, setNumPage,
                activePage, setActivePage,
                showNav, setShowNav
            }}
        >
            {children}
        </StateContext.Provider>
    )
}