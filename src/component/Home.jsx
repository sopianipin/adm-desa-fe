import {
    SmileOutlined
} from "@ant-design/icons";
import { Button, Card, Col, Layout, Row, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;
const { Header, Content } = Layout;
const Home = () => {
  return (
    <Content>
      <div style={{ background: "#F0F8FF", padding: "30px" }}>
        <div style={{ textAlign: "center" }}>
          <Title level={2}>Welcome to Admin Desa</Title>
          <Text type="secondary">
            Welcome to the Admin Desa dashboard, your one-stop-shop for managing
            all of your village's data needs. Whether you're keeping track of
            programs, users, or pending requests, this dashboard makes it easy
            to stay on top of everything. With an elegant and intuitive
            interface, you'll be able to manage your data quickly and easily,
            leaving you more time to focus on the things that matter most.
          </Text>
        </div>
        <br />
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card title="Programs" bordered={false}>
              <div style={{ textAlign: "center" }}>
                <Title level={3}>5</Title>
                <Text type="secondary">Active Programs</Text>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Users" bordered={false}>
              <div style={{ textAlign: "center" }}>
                <Title level={3}>10</Title>
                <Text type="secondary">Registered Users</Text>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Pending Requests" bordered={false}>
              <div style={{ textAlign: "center" }}>
                <Title level={3}>2</Title>
                <Text type="secondary">Pending Requests</Text>
              </div>
            </Card>
          </Col>
        </Row>
        <br />
        <div style={{ textAlign: "center" }}>
          <Button
            type="primary"
            shape="round"
            icon={<SmileOutlined />}
            size="large"
          >
            Get Started
          </Button>
        </div>
      </div>
    </Content>
  );
};
export default Home;
