import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input, Button, DatePicker } from "antd";
import moment from "moment";

const EditProgram = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/programs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        form.setFieldsValue({
          programName: data.programName,
          details: data.details,
          activeDate: moment(data.activeDate),
          endDate: moment(data.endDate),
        });
      })
      .catch((error) => console.log(error));
  }, [id, form]);

  const onFinish = (values) => {
    fetch(`http://localhost:8080/programs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(() => {
        navigate("/list-program");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Edit Program</h1>
      <Form form={form} onFinish={onFinish} layout="vertical"> 
        <Form.Item
          label="Program Name"
          name="programName"
          rules={[
            {
              required: true,
              message: "Please input program name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Details"
          name="details"
          rules={[
            {
              required: true,
              message: "Please input program details!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Start Date"
          name="activeDate"
          rules={[
            {
              required: true,
              message: "Please select start date!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="End Date"
          name="endDate"
          rules={[
            {
              required: true,
              message: "Please select end date!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Program
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProgram;
