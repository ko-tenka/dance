import { Input, Form, Button, Upload } from 'antd';
import './index.css';
import { fetchAddPost } from '../../redux/thunkActions'
import { PlusOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { fetchUserInfo } from '../../redux/thunkActions'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import axios from 'axios';

export default function AddForm() {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const user = useAppSelector((store) => store.userSlice.user);
  
  useEffect(() => {
    void dispatch(fetchUserInfo());
  }, [dispatch]);

  const [fileList, setFileList] = useState([]);

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    if (fileList.length > 0) {
      formData.append('img', fileList[0].originFileObj);
    }

    const result = await dispatch(fetchAddPost(formData));
    console.log('Форма 24', result);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Форма 28', errorInfo);
  };

  const handleFileChange = (info) => {
    let newFileList = [...info.fileList];
    if (info.file.status === 'done') {
      newFileList = newFileList.slice(-1);
    }
    setFileList(newFileList);
  };

  const handlerFileRemove = async (file) => {
    console.log(file);
    try {
      await axios.post('http://localhost:3000/api/img/del', { fileName: file.name });
      setFileList([]);
      console.log('Консоль на 609 в Form ===> Файл удален');
      return true;
    } catch (error) {
      console.log('Консоль на 609 в Form ===> Ошибка при удалении', error);
      return false;
    }
  };

  return (
    <div className='FormCont'>
      {user ? (
        <>
          <Form
            form={form}
            name="img"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={<span style={{ color: 'black' }}>Название</span>}
              name="title"
              rules={[{ required: true, message: 'Введите название!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<span style={{ color: 'black' }}>Описание</span>}
              name="description"
              rules={[{ required: true, message: 'Введите описание!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Изображение"
              valuePropName="fileList"
              getValueFromEvent={(e) => {
                if (Array.isArray(e)) {
                  return e;
                }
                return e && e.fileList;
              }}
            >
              <Upload
                maxCount={1}
                name='img'
                action=""
                // action="http://localhost:3000/api/task/"
                listType="picture"
                onChange={handleFileChange}
                onRemove={handlerFileRemove}
                fileList={fileList}
              >
                <Button icon={<PlusOutlined />} style={{ border: 0, background: 'none' }} type="button">
                  Загрузить
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" className='btnForm'>
                Добавить
              </Button>
            </Form.Item>
          </Form>
        </>
      ) : null}
    </div>
  );
}
