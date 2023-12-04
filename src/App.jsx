import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes/index.jsx";
import { Fragment } from "react";
import { DefaultLayout } from "./component/Layout";
import PrivateRoute from "./component/PrivateRoute/index.jsx";
import "./tailwind.css";
import { StateProvider } from "./context/stateContext.jsx";
import { ApiProvider } from "./context/apiContext.jsx";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ6-fWZvk5wAwie0KBjI1AoIiE1DW4ujg",
  authDomain: "admintech-74572.firebaseapp.com",
  projectId: "admintech-74572",
  storageBucket: "admintech-74572.appspot.com",
  messagingSenderId: "816374740825",
  appId: "1:816374740825:web:0e1f0e02b09cc501177e48",
  measurementId: "G-9YD0CLVQKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
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
