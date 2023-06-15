import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';
import { DepartmentItem } from '..';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default ({ afterAdd }: { afterAdd: (newValue: DepartmentItem) => void }) => {
  const [form] = Form.useForm<DepartmentItem>();
  return (
    <ModalForm<DepartmentItem>
      title="新建部门"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          新建
        </Button>
      }
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        // TODO: 替换为真实请求
        await waitTime(2000);
        afterAdd(values);
        console.log(values.name);
        message.success('提交成功');
        return true;
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          label="部门名称"
          //   tooltip="最长为 24 位"
          placeholder="请输入名称"
        />
        <ProFormText width="md" name="phone_number" label="手机号码" placeholder="请输入手机号码" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText width="md" name="email" label="电子邮箱" placeholder="请输入电子邮箱" />
        <ProFormText width="md" name="charger" label="负责人" placeholder="请输入负责人" />
      </ProForm.Group>
    </ModalForm>
  );
};
