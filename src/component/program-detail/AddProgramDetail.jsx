import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const AddProgramDetail = () => {
    const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const response = await fetch('http://localhost:8080/program-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const data = await response.json();
      console.log(data);
      navigate("/list-program-detail")
      // do something after successful post
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="add_program_detail"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
    >
      <Form.Item
        label="Detail"
        name="detail"
        rules={[
          {
            required: true,
            message: 'Please input the detail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Program ID"
        name="programId"
        rules={[
          {
            required: true,
            message: 'Please input the ProgramID!',
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="NIK"
        name="nik"
        rules={[
          {
            required: true,
            message: 'Please input the NIK!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 14,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProgramDetail;