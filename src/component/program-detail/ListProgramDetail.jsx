import { DeleteOutlined, EditOutlined,PlusOutlined  } from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListProgramDetail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    // replace this with your API call to retrieve the data
    const response = await fetch("http://localhost:8080/program-details");
    const result = await response.json();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Program ID",
      dataIndex: "programId",
      key: "programId",
    },
    {
      title: "NIK",
      dataIndex: "nik",
      key: "nik",
    },
    {
      title: "Detail",
      dataIndex: "detail",
      key: "detail",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleEdit = (record) => {};

  const handleDelete = (record) => {
    // replace this with your API call to delete the data
    console.log("Delete:", record);
  };

  return (
    <>
      <Link to="/add-program-detail">
        <Button type="primary" icon={<PlusOutlined />}>
          Add Data
        </Button>
      </Link> <br /> <br />
      <Table columns={columns} dataSource={data} loading={loading} />
    </>
  );
};

export default ListProgramDetail;
