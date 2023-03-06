import React from "react";
import { Button, Card, PageHeader } from "antd";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

function App() {
  return (
    <>
      <PageHeader
        className="site-page-header"
        // onBack={() => null}
        extra={[
          <Button
            key="1"
            icon={<LogoutOutlined/>}
            type="default"
            // onClick={handleLogout}
          >
            Logout
          </Button>,
        ]}
        title="ADM - Desa App"
        subTitle="aplikasi manajemen desa"
      />
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />}>
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Program">
              <Menu.Item key="1" icon={<AppstoreOutlined />}>
                <Link to={"/list-program"}>List Programs</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<SettingOutlined />}>
                <Link to={"/add-program"}></Link>Add Program
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: "10px" }}>
            <Card>
              <Outlet />
            </Card>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
