import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';

const ListVillageOrgDetail = () => {
  const [villageOrgDetails, setVillageOrgDetails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/village-organization-details')
      .then(response => response.json())
      .then(data => setVillageOrgDetails(data))
      .catch(error => console.error(error));
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Organization ID',
      dataIndex: 'organizationId',
      key: 'organizationId',
    },
    {
      title: 'NIK',
      dataIndex: 'nik',
      key: 'nik',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="default" style={{ marginRight: 16 }}>Update</Button>
          <Button type="default">Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={villageOrgDetails} rowKey="id" />
    </div>
  );
};

export default ListVillageOrgDetail;