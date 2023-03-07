import { Form, Input, Button, Card, Row, Col, PageHeader } from "antd";

function LoginComponent() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Row>
        <Col>
          <PageHeader
            className="site-page-header"
            // onBack={() => null}
            title="ADM - Desa App"
            subTitle="aplikasi manajemen desa"
          />
        </Col>
      </Row>
      <Row justify={"center"} align={"middle"} style={{ minHeight: "70vh" }}>
        <Col span={10}>
          <Card title={"Login Aplikasi adm desa"}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default LoginComponent;
