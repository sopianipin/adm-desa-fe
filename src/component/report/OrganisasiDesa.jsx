import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const OrganisasiDesa = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/reports/village-organization')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const columns = [
    {
      title: 'Nama Organisasi',
      dataIndex: 'organizationName',
      key: 'organizationName',
    },
    {
      title: 'Jumlah Anggota',
      dataIndex: 'totalMembers',
      key: 'totalMembers',
    },
  ];

  return (
    <div>
      <Button type="primary" icon={<DownloadOutlined />} onClick={() => window.open('http://localhost:8080/reports/village-organization/export')}>
        Download Laporan
      </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default OrganisasiDesa;
