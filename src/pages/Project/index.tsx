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

type ProjectItem = {
  project_id: number; // 项目编号
  project_name: string; // 项目名称
  project_place: string; // 项目地点
  project_scale: string; // 项目规模
  project_people: number; // 项目人数
  project_time: string; // 项目时间
};

const columns: ProColumns<ProjectItem>[] = [
  {
    title: '项目编号',
    dataIndex: 'project_id',
    key: 'project_id',
    width: 48,
    hideInSearch: true,
  },
  {
    title: '项目名称',
    dataIndex: 'project_name',
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
    title: '项目地点',
    key: 'project_place',
    dataIndex: 'project_place',
    // hideInSearch: true,
  },
  {
    title: '项目规模',
    key: 'project_scale',
    dataIndex: 'project_scale',
    hideInSearch: true,
  },
  {
    title: '项目人数',
    key: 'project_people',
    dataIndex: 'project_people',
    hideInSearch: true,
  },
  {
    title: '项目时间',
    key: 'project_time',
    dataIndex: 'project_time',
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
          action?.startEditable?.(record.project_id);
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

function Project() {
  const actionRef = useRef<ActionType>();
  return (
    <div>
      <div>测试</div>
      <ProTable<ProjectItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}) => {
          // console.log(sort, filter); // 添加额外的sort项目
          // await waitTime(2000);
          return request<{
            data: ProjectItem[];
          }>('https://mock.apifox.cn/m1/2858719-0-default/project/list', {
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

export default Project;
