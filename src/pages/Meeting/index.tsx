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

type MeetingItem = {
  meeting_id: number; //会议编号
  meeting_name: string; // 会议名称
  meeting_leader: number; //会议领导
  meeting_place: string; //会议地点
  meeting_time: string; //会议时间
};

const columns: ProColumns<MeetingItem>[] = [
  {
    title: '会议编号',
    dataIndex: 'meeting_id',
    key: 'meeting_id',
    width: 80,
    // hideInSearch: true,
    // hideInSearch: true,
  },
  {
    title: '会议名称',
    dataIndex: 'meeting_name',
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
    title: '会议领导',
    key: 'meeting_leader',
    dataIndex: 'meeting_leader',
    hideInSearch: true,
  },
  {
    title: '会议地点',
    key: 'meeting_place',
    dataIndex: 'meeting_place',
    hideInSearch: true,
  },
  {
    title: '会议时间',
    key: 'meeting_time',
    dataIndex: 'meeting_time',
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
          action?.startEditable?.(record.meeting_id);
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

function Meeting() {
  const actionRef = useRef<ActionType>();
  return (
    <div>
      <div>测试</div>
      <ProTable<MeetingItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}) => {
          // console.log(sort, filter); // 添加额外的sort项目
          // await waitTime(2000);
          return request<{
            data: MeetingItem[];
          }>('https://mock.apifox.cn/m1/2858719-0-default/meeting/list', {
            params,
            // https://mock.apifox.cn/m1/2858719-0-default
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

export default Meeting;
