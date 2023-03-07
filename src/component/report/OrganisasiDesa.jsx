import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const OrganisasiDesa = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/reports/village-organization")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const columns = [
    {
      title: "Nama Organisasi",
      dataIndex: "organizationName",
      key: "organizationName",
    },
    {
      title: "Jumlah Anggota",
      dataIndex: "totalMembers",
      key: "totalMembers",
    },
  ];

  return (
    <div>
      <h1>Organisasi Desa</h1>
      <div style={{ marginBottom: "16px" }}>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
        >
          Unduh Laporan
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default OrganisasiDesa;
