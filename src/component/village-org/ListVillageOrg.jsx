import { Button, Form, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListVillageOrg = () => {
  const [orgList, setOrgList] = useState([]);
  const [form] = Form.useForm();

  const fetchOrgList = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/village-organizations"
      );
      const data = await response.json();
      setOrgList(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrgList();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/village-organizations/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        fetchOrgList();
      } else {
        console.error("Failed to delete organization");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Organization Name",
      dataIndex: "organizationName",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <>
          <Space>
            <Button type="default">Edit</Button>
            <Button type="default">Delete</Button>
          </Space>
        </>
      ),
    },
  ];

  return (
    <>
      <div style={{ marginBottom: "16px" }}>
        <Link to={"/add-village-org"}>
          <Button type="primary">Add Organization</Button>
        </Link>
      </div>
      <Table dataSource={orgList} columns={columns} rowKey="id" />
    </>
  );
};

export default ListVillageOrg;
