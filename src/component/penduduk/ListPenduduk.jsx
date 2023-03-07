import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Descriptions } from "antd";

const ListPenduduk = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedPenduduk, setSelectedPenduduk] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "NIK",
      dataIndex: "nik",
      key: "nik",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button type="primary" onClick={() => showModal(record)}>
          Detail
        </Button>
      ),
    },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/penduduk");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const showModal = (record) => {
    setSelectedPenduduk(record);
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} rowKey="id" />

      <Modal
        title="Detail Penduduk"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        {selectedPenduduk && (
          <div>
            <Descriptions title="Selected Penduduk">
              <Descriptions.Item label="NIK">
                {selectedPenduduk.nik}
              </Descriptions.Item>
              <Descriptions.Item label="Full Name">
                {selectedPenduduk.fullName}
              </Descriptions.Item>
              <Descriptions.Item label="Gender">
                {selectedPenduduk.gender}
              </Descriptions.Item>
              <Descriptions.Item label="Place of Birth">
                {selectedPenduduk.placeOfBirth}
              </Descriptions.Item>
              <Descriptions.Item label="Date of Birth">
                {new Date(selectedPenduduk.dateOfBirth).toLocaleDateString()}
              </Descriptions.Item>
              <Descriptions.Item label="KK Number">
                {selectedPenduduk.kkNumber}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {selectedPenduduk.address}
              </Descriptions.Item>
              <Descriptions.Item label="Marital Status">
                {selectedPenduduk.maritalStatus}
              </Descriptions.Item>
              <Descriptions.Item label="Nationality">
                {selectedPenduduk.nationality}
              </Descriptions.Item>
              <Descriptions.Item label="Education">
                {selectedPenduduk.education}
              </Descriptions.Item>
              <Descriptions.Item label="Profession">
                {selectedPenduduk.profession}
              </Descriptions.Item>
              <Descriptions.Item label="Mother's Name">
                {selectedPenduduk.motherName}
              </Descriptions.Item>
              <Descriptions.Item label="Father's Name">
                {selectedPenduduk.fatherName}
              </Descriptions.Item>
              <Descriptions.Item label="RT">
                {selectedPenduduk.rt}
              </Descriptions.Item>
              <Descriptions.Item label="RW">
                {selectedPenduduk.rw}
              </Descriptions.Item>
              <Descriptions.Item label="Postal Code">
                {selectedPenduduk.postalCode}
              </Descriptions.Item>
              <Descriptions.Item label="Village">
                {selectedPenduduk.village}
              </Descriptions.Item>
              <Descriptions.Item label="Sub District">
                {selectedPenduduk.subDistrict}
              </Descriptions.Item>
              <Descriptions.Item label="City">
                {selectedPenduduk.city}
              </Descriptions.Item>
              <Descriptions.Item label="Province">
                {selectedPenduduk.province}
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                {selectedPenduduk.status}
              </Descriptions.Item>
            </Descriptions>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ListPenduduk;
