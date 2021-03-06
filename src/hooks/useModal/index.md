## useModal

<Alert type='info'>
  封装一些与Modal相关的操作
</Alert>

### Modal

Modal 的配置项目类型有很多, 但是有一项我们经常会忘记配置, 那就是`Modal`的`onCancel`事件, 现在把这个问题解决下, 即使忘记配置`onCancel`, Modal 也可以关闭.

```jsx
import React from 'react';
import { Modal, Button } from 'antd';
import { useModal } from 'kjj-fe-common';

export default () => {
  const modalConfig = useModal({
    visible: false,
    config: {
      title: '点击右上角的关闭图标',
    },
  });

  return (
    <>
      <Modal {...modalConfig}>
        <h3>点击右上角的X图标, 关闭对话框</h3>
        <p>特意不配置Modal的onCancel事件</p>
      </Modal>
      <Button onClick={modalConfig.toggle}>Open Modal</Button>
    </>
  );
};
```

### Table + Modal

业务中会遇到的操作需求, Table + Modal, 常见的场景是点击表格操作列的详情按钮, 弹出一个 Modal 对话框, 用于查看详情.

在我们之前的业务中, 遇到如下操作, 会有两次赋值操作, 如下:

1. 声明 visible 值, 用于控制 Modal 对话框的可见状态;
2. 声明 info 值, 用于存储 TableRow 的数据;
3. 对 Modal 的 Props 进行赋值使用.

现在我们可以直接使用 useModal, 简化两次声明操作:

```jsx
import React from 'react';
import { Table, Modal } from 'antd';
import { useModal } from 'kjj-fe-common';

import 'antd/dist/antd.css';

export default () => {
  const handleSubmit = () => {
    console.log(modalConfig.actions.getItem('1'));
    return new Promise((rs, rj) => setTimeout(rs, 1000));
  };

  const modalConfig = useModal({
    visible: false,
    config: {
      title: 'useModal',
    },
    onSubmit: handleSubmit,
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Option',
      dataIndex: 'option',
      fixed: 'right',
      render(_, record) {
        return [
          <a
            onClick={() => {
              modalConfig.toggle(record);
            }}
          >
            Update
          </a>,
        ];
      },
    },
  ];

  const dataSource = [
    {
      name: 'shadow',
      age: 25,
      _id: Math.random(),
    },
    {
      name: 'shadow1',
      age: 22,
      _id: Math.random(),
    },
  ];

  return (
    <>
      <Table rowKey="_id" columns={columns} dataSource={dataSource} />

      <Modal {...modalConfig}>
        <h4>Hello Modal!!!</h4>
        <p>{JSON.stringify(modalConfig.store)}</p>
      </Modal>
    </>
  );
};
```

### Table + Form

其实最常见的还是`Table`的操作列点击编辑按钮, 弹出一个`Modal`对话框, 但是对话框内是一个`Form`表单.

Table 与 Form 的交互中, 偶尔会出现一些需要格式化数据后, 将格式化后的值存入 Form 中, 可以使用`parser`方法来处理一些数据问题.

```jsx
import React from 'react';
import { Table, Modal, Form, Input } from 'antd';
import { useModal } from 'kjj-fe-common';
import dayjs from 'dayjs';

import 'antd/dist/antd.css';

export default () => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    return new Promise((rs, rj) =>
      setTimeout(() => {
        window.alert(`Form Values: ${JSON.stringify(form.getFieldsValue())}`);
        rs();
      }, 1000),
    );
  };

  const modalConfig = useModal({
    visible: false,
    config: {
      title: 'useModal',
      destroyOnClose: true,
    },
    formConfig: {
      form,
      parser: val => ({
        ...val,
        birth: dayjs(new Date()).format('YYYY-MM-DD hh:mm:ss'),
      }),
    },
    onSubmit: handleSubmit,
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'birth',
      dataIndex: 'birth',
    },
    {
      title: 'Option',
      dataIndex: 'option',
      fixed: 'right',
      render(_, record) {
        return [
          <a
            onClick={() => {
              modalConfig.toggle(record);
              form.setFieldsValue(record);
            }}
          >
            Update
          </a>,
        ];
      },
    },
  ];

  const dataSource = [
    {
      name: 'shadow',
      age: 25,
      birth: '2020-02-02 14:00:00',
      _id: Math.random(),
    },
    {
      name: 'shadow1',
      age: 22,
      birth: '2020-02-02 14:00:00',
      _id: Math.random(),
    },
  ];

  return (
    <>
      <Table rowKey="_id" columns={columns} dataSource={dataSource} />

      <Modal {...modalConfig}>
        <Form {...modalConfig.formConfig}>
          <Form.Item label="name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="age" name="age">
            <Input />
          </Form.Item>
          <Form.Item label="birth" name="birth">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
```
