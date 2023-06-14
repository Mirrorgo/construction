// import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'NEU 出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: '全国建筑市场监管公共服务平台',
          href: 'https://jzsc.mohurd.gov.cn/home',
          blankTarget: true,
        },
        // {
        //   key: 'github',
        //   title: <GithubOutlined />,

        //   href: 'https://jzsc.mohurd.gov.cn/',
        //   // href: 'https://github.com/ant-design/ant-design-pro',
        //   // https://jzsc.mohurd.gov.cn/
        //   blankTarget: true,
        // },
        {
          key: 'Ant Design',
          title: '“十四五”建筑业发展规划',
          href: 'https://www.gov.cn/zhengce/zhengceku/2022-01/27/5670687/files/12d50c613b344165afb21bc596a190fc.pdf',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
