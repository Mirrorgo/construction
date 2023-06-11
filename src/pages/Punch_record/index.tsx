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

type PunchRecordItem = {
  punch_id: number; //打卡编号
  employee_name: string; // 员工姓名
  punch_state: string; // 打卡状态
  punch_temperature: string; //打卡温度
  punch_location: string; //打卡位置
  punch_time: string; // 打卡时间
};

const columns: ProColumns<PunchRecordItem>[] = [
  {
    title: '打卡编号',
    dataIndex: 'punch_id',
    key: 'punch_id',
    width: 80,
    hideInSearch: true,
  },
  {
    title: '员工姓名',
    dataIndex: 'employee_name',
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
    title: '打卡状态',
    key: 'punch_state',
    dataIndex: 'punch_state',
    hideInSearch: true,
  },
  {
    title: '打卡温度',
    key: 'punch_temperature',
    dataIndex: 'punch_temperature',
    hideInSearch: true,
  },
  {
    title: '打卡位置',
    key: 'punch_location',
    dataIndex: 'punch_location',
    hideInSearch: true,
  },
  {
    title: '打卡时间',
    key: 'punch_time',
    dataIndex: 'punch_time',
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
          action?.startEditable?.(record.punch_id);
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

function PunchRecord() {
  const actionRef = useRef<ActionType>();
  return (
    <div>
      <div></div>
      <ProTable<PunchRecordItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}) => {
          // console.log(sort, filter); // 添加额外的sort项目
          // await waitTime(2000);
          return request<{
            data: PunchRecordItem[];
          }>('https://mock.apifox.cn/m1/2858719-0-default/punchRecord/list', {
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

export default PunchRecord;
