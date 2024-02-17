import { BiUserPin, BiCommentDots } from "react-icons/bi";
import { FaWarehouse } from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";
import { BsBag, BsBarChartLine } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
const listNameIcons = [
  {
    url: RiDashboardLine,
    name: "Dashboard",
    link: "/",
  },
  {
    url: BsBag,
    name: "Product",
    link: "/product",
  },
  {
    url: BiUserPin,
    name: "User/Staff",
    link: "/user",
  },
  {
    url: BiCommentDots,
    name: "Comment",
    link: "/comment",
  },
  {
    url: MdEditNote,
    name: "Posts",
    link: "/posts",
  },
  {
    url: HiOutlineClipboardList,
    name: "Management",
    link: "/management",
  },
  {
    url: FaWarehouse,
    name: "Warehouse",
    link: "/ware",
  },
  {
    url: BsBarChartLine,
    name: "Statistical",
    link: "/statistical",
  },
];
export default listNameIcons;
