import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';
import request from 'umi-request';
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

type NotificationItem = {
  id: number;
  title: string;
  created_at: string;
  author: string;
};

const columns: ProColumns<NotificationItem>[] = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    width: 48,
    hideInSearch: true,
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    title: '创建者',
    key: 'author',
    dataIndex: 'author',
  },
  {
    title: '创建时间',
    key: 'created_at',
    dataIndex: 'created_at',
    valueType: 'date',
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
          action?.reload();
        }}
      >
        删除
      </a>,
    ],
  },
];

function Notification() {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<NotificationItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        // console.log(sort, filter); // 添加额外的sort项目
        // await waitTime(2000);
        return request<{
          data: NotificationItem[];
          // }>('https://proapi.azurewebsites.net/github/issues', {
        }>('https://mock.apifox.cn/m1/2858719-0-default/notification/list', {
          params,
        });
      }}
      editable={{
        type: 'multiple',
        onSave: async (key, row) => {
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
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="公告列表"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            // TODO 新建
            actionRef.current?.reload();
          }}
          type="primary"
        >
          新建
        </Button>,
      ]}
    />
  );
}

export default Notification;
