import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddVillageOrgDetail = () => {
  const [form] = Form.useForm();
  const [organizationList, setOrganizationList] = useState([]);
  const [nikOptions, setNikOptions] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:8080/village-organizations")
      .then((response) => response.json())
      .then((data) => {
        setOrganizationList(data);
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

  const onFinish = (values) => {
    fetch("http://localhost:8080/village-organization-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        message.success("Data berhasil ditambahkan");
        navigate("/list-village-org-detail")
      })
      .catch((error) => {
        console.error("Error:", error);
        message.error("Terjadi kesalahan saat menambahkan data");
      });
  };

  return (
    <Form form={form} onFinish={onFinish} layout={"vertical"}>
      <Form.Item
        name="organizationId"
        label="Organisasi"
        rules={[
          {
            required: true,
            message: "Organisasi harus dipilih",
          },
        ]}
      >
        <Select>
          {organizationList.map((org) => (
            <Option key={org.id} value={org.id}>
              {org.organizationName}
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
        name="position"
        label="Jabatan"
        rules={[
          {
            required: true,
            message: "Jabatan harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[
          {
            required: true,
            message: "Status harus diisi",
          },
        ]}
      >
        <Select>
          <Option value="Aktif">Aktif</Option>
          <Option value="Nonaktif">Nonaktif</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Tambah Data
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddVillageOrgDetail;
