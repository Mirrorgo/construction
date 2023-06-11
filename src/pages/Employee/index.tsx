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

type EmployeeItem = {
  employee_id: number;
  employee_name: string; // 部门名称
  employee_sex: string;
  employee_age: number;
  employee_phone: string;
  employee_email: string;
};

const columns: ProColumns<EmployeeItem>[] = [
  {
    title: '员工编号',
    dataIndex: 'employee_id',
    key: 'employee_id',
    width: 80,
    hideInSearch: true,
  },
  {
    title: '员工姓名',
    dataIndex: 'employee_name',
    key: 'employee_name',
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
    title: '性别',
    key: 'employee_sex',
    dataIndex: 'employee_sex',
    hideInSearch: true,
  },
  {
    title: '员工年龄',
    key: 'employee_age',
    dataIndex: 'employee_age',
    hideInSearch: true,
  },
  {
    title: '员工电话',
    key: 'employee_phone',
    dataIndex: 'employee_phone',
    // hideInSearch: true,
  },
  {
    title: '员工邮箱',
    key: 'employee_email',
    dataIndex: 'employee_email',
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
          action?.startEditable?.(record.employee_id);
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

function Employee() {
  const actionRef = useRef<ActionType>();
  return (
    <div>
      <div></div>
      <ProTable<EmployeeItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}) => {
          // console.log(sort, filter); // 添加额外的sort项目
          // await waitTime(2000);
          return request<{
            data: EmployeeItem[];
          }>('https://mock.apifox.cn/m1/2858719-0-default/employee/list', {
            params,
          });
          // https://mock.apifox.cn/m1/2858719-0-default/department/list
          // https://mock.apifox.cn/m1/2858719-0-default/employee/list
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

export default Employee;
