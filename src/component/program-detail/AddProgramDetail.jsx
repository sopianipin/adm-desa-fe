import { Form, Input, Button, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const AddProgramDetail = () => {
  const navigate = useNavigate();
  const [nikOptions, setNikOptions] = useState([]);
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/programs")
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch("http://localhost:8080/penduduk")
      .then((response) => response.json())
      .then((data) => {
        const options = data.map((penduduk) => ({
          label: penduduk.nik,
          value: penduduk.nik,
        }));
        setNikOptions(options);
      })
      .catch((error) => console.error(error));
  }, []);

  const onFinish = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/program-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data);
      navigate("/list-program-detail");
      // do something after successful post
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
            message: "Please input the detail!",
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
            message: "Please input the ProgramID!",
          },
        ]}
      >
        <Select placeholder="Select Program">
          {programs.map((option) => (
            <Option key={option.value} value={option.programName}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="nik"
        label="NIK"
        rules={[
          {
            required: true,
            message: "Please select NIK",
          },
        ]}
      >
        <Select placeholder="Select NIK">
          {nikOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
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
