import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import { DownloadOutlined } from '@ant-design/icons';

const columns = [
  {
    title: "Posisi",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Jumlah Anggota",
    dataIndex: "totalMembers",
    key: "totalMembers",
  },
];

const AnggotaOrganisasi = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/reports/village-organization/detail"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Anggota Organisasi</h1>
      <div style={{ marginBottom: "16px" }}>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
        >
          Unduh Laporan
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default AnggotaOrganisasi;
