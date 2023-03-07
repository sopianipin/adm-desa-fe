import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const AddVillageOrg = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true);
    
    try {
      const response = await fetch("http://localhost:8080/village-organizations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
      if (response.ok) {
        console.log("Data successfully added!");
        form.resetFields();
        navigate("/list-village-org")
      } else {
        console.log("Failed to add data!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item label="Organization Name" name="organizationName" rules={[{ required: true, message: "Organization name is required" }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>Add</Button>
      </Form.Item>
    </Form>
  );
};

export default AddVillageOrg;
