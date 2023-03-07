import { Button, Card, PageHeader } from "antd";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./App.css";

import {
  ApartmentOutlined,
  AppstoreOutlined, BookOutlined, ClusterOutlined, HomeOutlined,
  LogoutOutlined,
  PlusOutlined,
  FilePdfOutlined,
  SolutionOutlined, TeamOutlined, UnorderedListOutlined, UsergroupAddOutlined, UserOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

function App() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <PageHeader
        className="site-page-header"
        extra={[
          <Button
            key="1"
            icon={<LogoutOutlined />}
            type="default"
            onClick={handleLogout}
          >
            Logout
          </Button>,
        ]}
        title="Village Admin"
        subTitle="Simplify village management with an elegant dashboard"
      />
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={250} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["0"]}
            // defaultOpenKeys={["sub1", "sub2", "sub3", "sub4", "sub5"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />}>
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Program">
              <Menu.Item key="1" icon={<UnorderedListOutlined />}>
                <Link to={"/list-program"}>List Programs</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<PlusOutlined />}>
                <Link to={"/add-program"}>Add Program</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub6"
              icon={<AppstoreOutlined />}
              title="Program Detail"
            >
              <Menu.Item key="11" icon={<UnorderedListOutlined />}>
                <Link to={"/list-program-detail"}>List Programs Detail</Link>
              </Menu.Item>
              <Menu.Item key="12" icon={<PlusOutlined />}>
                <Link to={"/add-program-detail"}>Add Program Detail</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="Penduduk">
              <Menu.Item key="3" icon={<UnorderedListOutlined />}>
                <Link to={"/list-penduduk"}>List Penduduk</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<PlusOutlined />}>
                <Link to={"/add-penduduk"}>Add Penduduk</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<ApartmentOutlined />}
              title="Village Org."
            >
              <Menu.Item key="7" icon={<UnorderedListOutlined />}>
                <Link to={"/list-village-org"}>List Village Org.</Link>
              </Menu.Item>
              <Menu.Item key="8" icon={<PlusOutlined />}>
                <Link to={"/add-village-org"}>Add Village Org.</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              icon={<SolutionOutlined />}
              title="Village Org. Detail"
            >
              <Menu.Item key="9" icon={<UnorderedListOutlined />}>
                <Link to={"/list-village-org-detail"}>
                  List Village Org. Detail
                </Link>
              </Menu.Item>
              <Menu.Item key="10" icon={<PlusOutlined />}>
                <Link to={"/add-village-org-detail"}>
                  Add Village Org. Detail
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" icon={<FilePdfOutlined />} title="Report">
              <Menu.Item key="13" icon={<UserOutlined />}>
                <Link to="/reports/population">Jumlah Penduduk</Link>
              </Menu.Item>
              <Menu.Item key="14" icon={<BookOutlined />}>
                <Link to="/reports/program">Data Program</Link>
              </Menu.Item>
              <Menu.Item key="15" icon={<TeamOutlined />}>
                <Link to="/reports/program-receivers">
                  Penerima Program
                </Link>
              </Menu.Item>
              <Menu.Item key="16" icon={<ClusterOutlined />}>
                <Link to="/reports/organizations">Organisasi Desa</Link>
              </Menu.Item>
              <Menu.Item key="17" icon={<UsergroupAddOutlined />}>
                <Link to="/reports/organization-members">
                  Anggota Organisasi
                </Link>
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
