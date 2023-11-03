import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes,privateRoutes } from "./routes/index.jsx";
import { Fragment, useContext, useEffect, useState } from "react";
import { DefaultLayout } from "./component/Layout";
import PrivateRoute from "./component/PrivateRoute/index.jsx";
import "./tailwind.css";
import {StateProvider } from "./context/stateContext.jsx";
import { ApiProvider } from "./context/apiContext.jsx";
function App() {
  const isLogin = JSON.parse(localStorage.getItem('isLogin') || false)
  useEffect(() => {
    isLogin === false && window.location.href === "/login"
  },[isLogin])
  /* useEffect(() => {
    useSetLocalStorage({key:'isLogin',value:true})
  },[]) */
  /* useEffect(() => {
    // Sử dụng setTimeout để trì hoãn việc gọi đến route 9 phút sau khi trang web được tải
    const timeoutId = setTimeout(() => {
      fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/restart`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

      // Sau khi gọi đến route lần đầu tiên, thiết lập interval để gọi đến route mỗi 9 phút
      const intervalId = setInterval(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_URL_SERVER}/restart`)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      }, 540000); // 540000 milliseconds = 9 minutes

      return () => clearInterval(intervalId);
    }, 540000); // 540000 milliseconds = 9 minutes

    return () => clearTimeout(timeoutId);
  }, []); */
  return (
    <StateProvider>
      <ApiProvider>
        <Router>
          <div className="App w-screen h-full">
            <Routes>
              {publicRoutes.map((route) => {
                const Pages = route.component;
    
                let Layout = DefaultLayout;
    
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
                if (route.path !== "/login") {
                  return (
                    <PrivateRoute
                      key={route.path}
                      path={route.path}
                      element={
                        <Layout>
                          <Pages />
                        </Layout>
                      }
                    />
                  );
                }
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <Layout>
                        <Pages />
                      </Layout>
                    }
                  />
                );
              })}
    
              {privateRoutes.map((route) => {
                const Pages = route.component;
    
                let Layout = DefaultLayout;
    
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
    
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <PrivateRoute>
                        <Layout>
                          <Pages />
                        </Layout>
                      </PrivateRoute>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
      </ApiProvider>
    </StateProvider>
  )
}

export default App
