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

type PermitCertificateItem = {
  permit_certificate_id: number; //经营许可证编号
  construction_unit: string; // 建设单位
  project_name: string; // 工程名称
  construction_place: string; // 建设地址
  design_unit: string; // 设计单位
  contract_price: string; // 合同价格
  contract_duration: string; // 合同工期
};

const columns: ProColumns<PermitCertificateItem>[] = [
  {
    title: '许可证编号',
    dataIndex: 'permit_certificate_id',
    key: 'permit_certificate_id',
    width: 100,
    // hideInSearch: true,
  },
  {
    title: '建设单位',
    dataIndex: 'construction_unit',
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
    title: '工程名称',
    key: 'project_name',
    dataIndex: 'project_name',
    hideInSearch: true,
  },
  {
    title: '建设地址',
    key: 'construction_place',
    dataIndex: 'construction_place',
    hideInSearch: true,
  },
  {
    title: '设计单位',
    key: 'design_unit',
    dataIndex: 'design_unit',
    hideInSearch: true,
  },
  {
    title: '合同价格 (万)',
    key: 'contract_price',
    dataIndex: 'contract_price',
    hideInSearch: true,
  },
  {
    title: '合同工期 (年)',
    key: 'contract_duration',
    dataIndex: 'contract_duration',
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
          action?.startEditable?.(record.permit_certificate_id);
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

function PermitCertificate() {
  const actionRef = useRef<ActionType>();
  return (
    <div>
      <div></div>
      <ProTable<PermitCertificateItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}) => {
          // console.log(sort, filter); // 添加额外的sort项目
          // await waitTime(2000);
          return request<{
            data: PermitCertificateItem[];
          }>('https://mock.apifox.cn/m1/2858719-0-default/permitCertificate/list', {
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

export default PermitCertificate;
