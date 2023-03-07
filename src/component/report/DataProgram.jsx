import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";

const DataProgram = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProgramData = async () => {
      const response = await fetch("http://localhost:8080/reports/program");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchProgramData();
  }, []);

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
      title: "Active Date",
      dataIndex: "activeDate",
      key: "activeDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
  ];

  const handleDownloadReport = () => {
    // Implement logic to download report
  };

  return (
    <div>
      <h1>Data Program</h1>
      <Button type="primary" onClick={handleDownloadReport}>
        Download Report
      </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default DataProgram;