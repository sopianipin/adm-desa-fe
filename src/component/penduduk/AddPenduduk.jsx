import { Form, Input, Select, DatePicker, Button, notification } from "antd";
import { useState } from "react";

const { Option } = Select;

const AddPenduduk = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/penduduk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Jika sukses, reset form dan munculkan notifikasi
        form.resetFields();
        notification.success({
          message: "Sukses",
          description: "Data berhasil ditambahkan",
        });
      } else {
        // Jika gagal, munculkan notifikasi error
        const error = await response.json();
        notification.error({
          message: "Gagal",
          description: error.message,
        });
      }
    } catch (error) {
      // Jika terjadi kesalahan, munculkan notifikasi error
      notification.error({
        message: "Gagal",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} name="add-penduduk" onFinish={onFinish} layout="vertical">
      <Form.Item
        name="nik"
        label="NIK"
        rules={[
          {
            required: true,
            message: "NIK harus diisi",
          },
          {
            pattern: /^[0-9]{16}$/,
            message: "NIK harus terdiri dari 16 digit angka",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fullName"
        label="Nama Lengkap"
        rules={[
          {
            required: true,
            message: "Nama lengkap harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Jenis Kelamin"
        rules={[
          {
            required: true,
            message: "Jenis kelamin harus diisi",
          },
        ]}
      >
        <Select>
          <Option value="Male">Laki-laki</Option>
          <Option value="Female">Perempuan</Option>
        </Select>
      </Form.Item>
      <Form.Item name="placeOfBirth" label="Tempat Lahir">
        <Input />
      </Form.Item>
      <Form.Item
        name="dateOfBirth"
        label="Tanggal Lahir"
        rules={[
          {
            required: true,
            message: "Tanggal lahir harus diisi",
          },
        ]}
      >
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>
      <Form.Item name="kkNumber" label="Nomor KK">
        <Input />
      </Form.Item>
      <Form.Item
        name="address"
        label="Alamat"
        rules={[
          {
            required: true,
            message: "Alamat harus diisi",
          },
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item name="maritalStatus" label="Status Pernikahan">
        <Select>
          <Option value="Single">Belum Menikah</Option>
          <Option value="Married">Menikah</Option>
          <Option value="Divorced">Cerai</Option>
          <Option value="Widowed">Duda/Janda</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="nationality"
        label="Kewarganegaraan"
        rules={[
          {
            required: true,
            message: "Kewarganegaraan harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="education"
        label="Pendidikan Terakhir"
        rules={[
          {
            required: true,
            message: "Pendidikan terakhir harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="profession"
        label="Pekerjaan"
        rules={[
          {
            required: true,
            message: "Pekerjaan harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="motherName"
        label="Nama Ibu"
        rules={[
          {
            required: true,
            message: "Nama ibu harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fatherName"
        label="Nama Ayah"
        rules={[
          {
            required: true,
            message: "Nama ayah harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="rt"
        label="RT"
        rules={[
          {
            required: true,
            message: "RT harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="rw"
        label="RW"
        rules={[
          {
            required: true,
            message: "RW harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="postalCode"
        label="Kode Pos"
        rules={[
          {
            required: true,
            message: "Kode pos harus diisi",
          },
          {
            pattern: /^[0-9]{5}$/,
            message: "Kode pos harus terdiri dari 5 digit angka",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="village"
        label="Kelurahan/Desa"
        rules={[
          {
            required: true,
            message: "Kelurahan/desa harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="subDistrict"
        label="Kecamatan"
        rules={[
          {
            required: true,
            message: "Kecamatan harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="city"
        label="Kota/Kabupaten"
        rules={[
          {
            required: true,
            message: "Kota/kabupaten harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="province"
        label="Provinsi"
        rules={[
          {
            required: true,
            message: "Provinsi harus diisi",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[
          {
            required: true,
            message: "Status harus diisi",
          },
        ]}
      >
        <Select>
          <Option value="Active">Active</Option>
          <Option value="Inactive">Inactive</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Penduduk
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddPenduduk;
