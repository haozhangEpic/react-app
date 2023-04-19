import React, { Suspense } from "react";

import { Layout, theme } from "antd";
import Header from "./component/Header/header";
import Menu from "./component/Menu";
import { Outlet } from "react-router-dom";
import "./index.module.less";

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <Menu />
      <Layout>
        <Header colorBgContainer={colorBgContainer} />
        <Content style={{ margin: "24px 16px 0", overflow: "auto" }}>
          <div style={{ background: colorBgContainer }}>
            <Suspense fallback={<div>摸鱼中...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>前端摸鱼工程师@张浩</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
