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
// BlacklistRecord
type BlacklistRecordItem = {
  blacklist_record_id: number; // 黑名单记录编号
  blacklist_record_subject: string; // 黑名单记录主体
  identification_department: string; // 认定部门
  putin_date: string; // 列入日期
  putout_date: string; // 列出日期
  blacklist_record_reason: string; // 黑名单记录事由
};

const columns: ProColumns<BlacklistRecordItem>[] = [
  {
    title: '黑名单记录编号',
    dataIndex: 'blacklist_record_id',
    key: 'blacklist_record_id',
    width: 140,
    // hideInSearch: true,
  },
  {
    title: '黑名单记录主体',
    dataIndex: 'blacklist_record_subject',
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
    title: '认定部门',
    key: 'identification_department',
    dataIndex: 'identification_department',
    hideInSearch: true,
  },
  {
    title: '列入日期',
    key: 'putin_date',
    dataIndex: 'putin_date',
    hideInSearch: true,
  },
  {
    title: '列出日期',
    key: 'putout_date',
    dataIndex: 'putout_date',
    hideInSearch: true,
  },
  {
    title: '黑名单记录事由',
    key: 'blacklist_record_reason',
    dataIndex: 'blacklist_record_reason',
    hideInSearch: true,
  },
  // blacklist_record_reason
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.blacklist_record_id);
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

function BlacklistRecord() {
  const actionRef = useRef<ActionType>();
  return (
    <div>
      <div></div>
      <ProTable<BlacklistRecordItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}) => {
          // console.log(sort, filter); // 添加额外的sort项目
          // await waitTime(2000);
          return request<{
            data: BlacklistRecordItem[];
          }>('https://mock.apifox.cn/m1/2858719-0-default/blacklistRecord/list', {
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
    </div>
  );
}

export default BlacklistRecord;
