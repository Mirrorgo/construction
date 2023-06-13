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

type QualificationCertificateItem = {
  certificate_id: number; //证书编号
  enterprise_name: string; // 企业名称
  detail_address: string; // 详细地址
  business_license_registration_number: string; // 营业执照注册号
  register_capital: string; // 注册资本
  legal_representative: string; // 法定代表人
  duration: string; // 有效期
};

const columns: ProColumns<QualificationCertificateItem>[] = [
  {
    title: '证书编号',
    dataIndex: 'certificate_id',
    key: 'certificate_id',
    width: 80,
    // hideInSearch: true,
  },
  {
    title: '企业名称',
    dataIndex: 'enterprise_name',
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
    title: '详细地址',
    key: 'detail_address',
    dataIndex: 'detail_address',
    hideInSearch: true,
  },
  {
    title: '营业执照注册号',
    key: 'business_license_registration_number',
    dataIndex: 'business_license_registration_number',
    hideInSearch: true,
  },
  {
    title: '注册资本',
    key: 'register_capital',
    dataIndex: 'register_capital',
    hideInSearch: true,
  },
  {
    title: '法定代表人',
    key: 'legal_representative',
    dataIndex: 'legal_representative',
    hideInSearch: true,
  },
  {
    title: '有效期',
    key: 'duration',
    dataIndex: 'duration',
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
          action?.startEditable?.(record.certificate_id);
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

function QualificationCertificate() {
  const actionRef = useRef<ActionType>();
  return (
    <div>
      <div></div>
      <ProTable<QualificationCertificateItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}) => {
          // console.log(sort, filter); // 添加额外的sort项目
          // await waitTime(2000);
          return request<{
            data: QualificationCertificateItem[];
          }>('https://mock.apifox.cn/m1/2858719-0-default/qualificationCertificate/list', {
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

export default QualificationCertificate;
