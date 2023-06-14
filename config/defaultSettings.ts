import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '建筑行业征信管理系统 CICM',
  pwa: true,
  logo: '/img/neu-file.svg',
  // src="/img/construction_1.svg"
  // logo: 'file:///D:/temp/MicrosoftEdgeDownloads/7265731e-caf0-46af-80d7-1d08b30c64cf/%E6%95%85%E5%AE%AB.svg',
  // file:///D:/temp/MicrosoftEdgeDownloads/7265731e-caf0-46af-80d7-1d08b30c64cf/%E6%95%85%E5%AE%AB.svg
  // logo: <img
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
};

export default Settings;
