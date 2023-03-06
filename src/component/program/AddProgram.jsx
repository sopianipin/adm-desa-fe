import React, { useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { useNavigate } from "react-router-dom";

const AddProgram = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate =useNavigate()

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/programs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to add program");
      }

      setLoading(false);
      form.resetFields();
      navigate("/list-program")
      // Optionally, you can show a success message to the user here
    } catch (error) {
      setLoading(false);
      // Optionally, you can show an error message to the user here
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item
        label="Program Name"
        name="programName"
        rules={[{ required: true, message: "Please enter a program name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Details"
        name="details"
        rules={[{ required: true, message: "Please enter program details" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item
        label="Active Date"
        name="activeDate"
        rules={[{ required: true, message: "Please select an active date" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="End Date"
        name="endDate"
        rules={[{ required: true, message: "Please select an end date" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Add Program
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProgram;
