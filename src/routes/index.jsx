import Home from "../pages/Home";
import Product from "../pages/Product";
import User from "../pages/User";
import Comment from "../pages/Comment";
import Management from "../pages/Management";
import Statistical  from "../pages/Statistical";
import Login from "../pages/Login";
import Posts from "~/pages/Posts";
import Warehouse from "~/pages/Warehouse";
//PublicRoutes
const publicRoutes = [
  { path: "/login", component: Login },
];

const privateRoutes = [
  { path: "/", component: Home },
  { path: "/product", component: Product },
  { path: "/user", component: User },
  { path: "/comment", component: Comment },
  { path: "/statistical", component: Statistical },
  { path: "/Management", component: Management },
  { path: "/posts", component: Posts },
  { path:"/ware", component: Warehouse }
];

export { publicRoutes, privateRoutes };
