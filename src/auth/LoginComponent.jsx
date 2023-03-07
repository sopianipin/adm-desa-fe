import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Layout, message, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const { Content } = Layout;

const { Title } = Typography;

const LoginComponent = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    if (values.username == "admin" && values.password == "admin") {
      console.log("Received values of form: ", values);
      localStorage.setItem("username", "admin");
      navigate("/")
    } else {
      message.error("Wrong password or username !");
    }
  };

  return (
    <>
      <Layout>
        <Content>
          <div className="login-container">
            <div className="login-form-container">
              <h1>Login to Village Admin</h1>
              <Form
                name="normal_login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="login-image-container"></div>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default LoginComponent;
