import { Button, Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const PenerimaProgram = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProgramDetails = async () => {
      const response = await fetch('http://localhost:8080/reports/program/details');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchProgramDetails();
  }, []);

  const columns = [
    {
      title: 'NIK',
      dataIndex: 'nik',
      key: 'nik',
    },
    {
      title: 'Detail Program',
      dataIndex: 'detail',
      key: 'detail',
    },
    {
      title: 'Program Name',
      dataIndex: 'programName',
      key: 'programName',
    },
  ];

  const handleDownload = () => {
    // logic untuk mengunduh laporan
  };

  return (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Button type="primary" icon={<DownloadOutlined />} onClick={handleDownload}>
          Unduh Laporan
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default PenerimaProgram;
