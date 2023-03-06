import { Button, message, Popconfirm, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
const ListProgram = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getAll = () => {
    fetch("http://localhost:8080/programs")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAll();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/programs/${id}`, {
      method: "DELETE",
    })
      .then((data) => {
        message.success("Program deleted successfully.");
        getAll();
      })
      .catch((error) => {
        console.log(error);
        message.error("An error occurred while deleting the program.");
      });
  };
  const handleUpdate = (record) => {
    navigate(`/edit-program/${record.id}`);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Program Name",
      dataIndex: "programName",
      key: "programName",
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
    },
    {
      title: "Start Date",
      dataIndex: "activeDate",
      key: "activeDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          <Space>
            <Button type="primary" onClick={() => handleUpdate(record)}>
              Update
            </Button>
            <Popconfirm
              title="Are you sure you want to delete this program?"
              onConfirm={() => handleDelete(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="danger">Delete</Button>
            </Popconfirm>
          </Space>
        </>
      ),
    },
  ];

  return (
    <>
      <Link to={"/add-program"}>
        <Button type="primary" icon={<PlusOutlined />}>
          Add Data
        </Button>
      </Link>
      <br /> <br />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default ListProgram;
