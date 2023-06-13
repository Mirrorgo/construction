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

// PersonIntegrityRecord
type PersonIntegrityRecordItem = {
  person_integrity_record_id: number; //个人诚信记录编号
  person_name: string; // 个人姓名
  implementation_department: string; //实施部门
  decision_date: string; // 决定日期
  person_location: string; // 个人常住地
  person_reason: string; // 个人事由
};

const columns: ProColumns<PersonIntegrityRecordItem>[] = [
  {
    title: '个人诚信记录编号',
    dataIndex: 'person_integrity_record_id',
    key: 'person_integrity_record_id',
    width: 140,
    // hideInSearch: true,
  },
  {
    title: '个人姓名',
    dataIndex: 'person_name',
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
    title: '实施部门',
    key: 'implementation_department',
    dataIndex: 'implementation_department',
    hideInSearch: true,
  },
  {
    title: '决定日期',
    key: 'decision_date',
    dataIndex: 'decision_date',
    hideInSearch: true,
  },
  {
    title: '个人常住地',
    key: 'person_location',
    dataIndex: 'person_location',
    hideInSearch: true,
  },
  {
    title: '个人事由',
    key: 'person_reason',
    dataIndex: 'person_reason',
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
          action?.startEditable?.(record.person_integrity_record_id);
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

function PersonIntegrityRecord() {
  const actionRef = useRef<ActionType>();
  return (
    <div>
      <div></div>
      <ProTable<PersonIntegrityRecordItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}) => {
          // console.log(sort, filter); // 添加额外的sort项目
          // await waitTime(2000);
          return request<{
            data: PersonIntegrityRecordItem[];
          }>('https://mock.apifox.cn/m1/2858719-0-default/personIntegrityRecord/list', {
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

export default PersonIntegrityRecord;
