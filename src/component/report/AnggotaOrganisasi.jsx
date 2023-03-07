import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";

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
      <Button type="primary" onClick={fetchData}>
        Download Laporan
      </Button>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default AnggotaOrganisasi;
