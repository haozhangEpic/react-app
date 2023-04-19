import React from "react";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Link, RouteObject } from "react-router-dom";
import { PieChartOutlined } from "@ant-design/icons";
import App from "../App";

const Home = React.lazy(async () => await import("../features/home"));
const Input = React.lazy(
  async () => await import("../features/components/Input")
);
const TreeToFlat = React.lazy(async () => await import("../features/content"));
const FlatToTree = React.lazy(async () => await import("../features/content"));
const Debounce = React.lazy(async () => await import("../features/content"));
const Throttle = React.lazy(async () => await import("../features/content"));

const routers: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Knowledge",
        children: [
          {
            path: "/Knowledge/treetoflat",
            element: <TreeToFlat />,
          },
          {
            path: "/Knowledge/flattotree",
            element: <FlatToTree />,
          },
          {
            path: "/Knowledge/debounce",
            element: <Debounce />,
          },
          {
            path: "/Knowledge/throttle",
            element: <Throttle />,
          },
        ],
      },
      {
        path: "/Components",
        children: [
          {
            path: "/Components/avatorInput",
            element: <Input />,
          },
          {
            path: "/Components/flattotree",
            element: <FlatToTree />,
          },
          {
            path: "/Components/debounce",
            element: <Debounce />,
          },
        ],
      },
    ],
  },
];

export const menus: ItemType[] = [
  {
    key: "/",
    label: <Link to="/">首页</Link>,
    icon: <PieChartOutlined />,
  },
  {
    key: "/",
    label: "知识统计",
    icon: <PieChartOutlined />,
    children: [
      {
        key: "/Knowledge/treetoflat",
        label: <Link to="/Knowledge/treetoflat">TreeToFlat</Link>,
      },
      {
        key: "/Knowledge/flattotree",
        label: <Link to="/Knowledge/flattotree">FlatToTree</Link>,
      },
      {
        key: "/Knowledge/debounce",
        label: <Link to="/Knowledge/debounce">Debounce</Link>,
      },
      {
        key: "/Knowledge/throttle",
        label: <Link to="/Knowledge/throttle">Throttle</Link>,
      },
    ],
  },
  {
    key: "/Components",
    label: "组件",
    icon: <PieChartOutlined />,
    children: [
      {
        key: "/Components/avatorInput",
        label: <Link to="/Components/avatorInput">avatorInput</Link>,
      },
      {
        key: "/Components/flattotree",
        label: <Link to="/Knowledge/flattotree">FlatToTree</Link>,
      },
      {
        key: "/Components/debounce",
        label: <Link to="/Knowledge/debounce">Debounce</Link>,
      },
    ],
  },
];

export default routers;
