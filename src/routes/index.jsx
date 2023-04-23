import Home from "../Pages/Home";
import Product from "../Pages/Product";


//PublicRoutes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/product", component: Product },
  
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
