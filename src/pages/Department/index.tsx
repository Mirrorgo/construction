import React, { useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
// import { Button } from 'antd';
import { useRef } from 'react';
// import request from 'umi-request';
import MyUpload from '@/components/MyUpload';
import Add from './components/Add';
import { dataSource } from './util';
export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

export type DepartmentItem = {
  id: number;
  name: string; // 部门名称
  phone_number: number;
  email: string;
  charger: string;
};

function Department() {
  const [data, setData] = useState<DepartmentItem[]>(dataSource.data);
  const [newId, setNewId] = useState(6);
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<DepartmentItem>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      width: 48,
      hideInSearch: true,
    },
    {
      title: '部门名称',
      dataIndex: 'name',
      // copyable: true,
      // ellipsis: true,
      // tip: '标题过长会自动收缩',
      // formItemProps: {
      //   rules: [
      //     {
      //       required: true,
      //       message: '此项为必填项',
      //     },
      //   ],
      // },
    },
    {
      title: '手机',
      key: 'phone_number',
      dataIndex: 'phone_number',
      hideInSearch: true,
    },
    {
      title: '邮箱',
      key: 'email',
      dataIndex: 'email',
      hideInSearch: true,
    },
    {
      title: '负责人',
      key: 'charger',
      dataIndex: 'charger',
      hideInSearch: true,
    },

    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            // action?.startEditable?.(record.id);
            // TODO delete

            // fake delete
            setData((pre) => {
              const idx = pre.findIndex((cur) => cur.id === record.id);
              const now = [...pre];
              now.splice(idx, 1);
              return now;
            });

            // action?.reload();
          }}
        >
          删除
        </a>,
      ],
    },
  ];
  return (
    <div>
      <div>测试</div>
      <ProTable<DepartmentItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        dataSource={data}
        // request={async (params = {}) => {
        //   // console.log(sort, filter); // 添加额外的sort项目
        //   // await waitTime(2000);
        //   return request<{
        //     data: DepartmentItem[];
        //   }>('https://mock.apifox.cn/m1/2858719-0-default/department/list', {
        //     params,
        //   });
        // }}
        editable={{
          type: 'multiple',
          onSave: async (key, row) => {
            // fake save
            setData((pre) => {
              const idx = pre.findIndex((cur) => cur.id === key);
              const now = [...pre];
              now.splice(idx, 1, row);
              return now;
            });

            // TODO： update相关的请求
            console.log(key, 'key');
            console.log(row, 'row');
          },
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          onChange(value) {
            console.log('value: ', value);
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        // pagination={{
        //   pageSize: 5,
        //   onChange: (page) => console.log(page),
        // }}
        dateFormatter="string"
        headerTitle="公告列表"
        toolBarRender={() => [
          <MyUpload key="upload" />,
          // <Button
          //   key="add"
          //   icon={<PlusOutlined />}
          //   onClick={() => {
          //     // TODO 新建
          //     actionRef.current?.reload();
          //   }}
          //   type="primary"
          // >
          //   新建
          // </Button>,
          <Add
            key="add"
            afterAdd={async (newValue) => {
              setData((pre) => {
                // console.log(pre, '!', newValue);
                return [
                  ...pre,
                  {
                    ...newValue,
                    id: newId,
                  },
                ];
              });
              setNewId(newId + 1);
              // actionRef.current?.reload()
            }}
          />,
        ]}
      />
    </div>
  );
}

export default Department;
