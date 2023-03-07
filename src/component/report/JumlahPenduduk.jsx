import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const JumlahPenduduk = () => {
  const [jumlahPenduduk, setJumlahPenduduk] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/reports/penduduk");
    const data = await response.json();
    setJumlahPenduduk(data);
  };

  return (
    <Card title="Jumlah Penduduk">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <p>Total Penduduk:</p>
          <h3>{jumlahPenduduk.totalPenduduk}</h3>
        </Col>
        <Col span={8}>
          <p>Jumlah Laki-Laki:</p>
          <h3>{jumlahPenduduk.jumlahLakiLaki}</h3>
        </Col>
        <Col span={8}>
          <p>Jumlah Perempuan:</p>
          <h3>{jumlahPenduduk.jumlahPerempuan}</h3>
        </Col>
        <Col span={8}>
          <p>Jumlah Kawin:</p>
          <h3>{jumlahPenduduk.jumlahKawin}</h3>
        </Col>
        <Col span={8}>
          <p>Jumlah Belum Kawin:</p>
          <h3>{jumlahPenduduk.jumlahBelumKawin}</h3>
        </Col>
      </Row>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button type="primary" icon={<DownloadOutlined />}>
          Download report
        </Button>
      </div>
    </Card>
  );
};

export default JumlahPenduduk;
