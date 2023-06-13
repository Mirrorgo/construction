/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Admin',
      },
    ],
  },
  {
    //path: '/admin',
    path: '/watch-state',
    name: '监管状态',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        //path: '/admin',
        path: '/watch-state',
        redirect: '/watch-state/sub-page',
      },

      {
        path: '/watch-state/live',
        name: '现场工地',
        icon: 'warning',
        // component: './Admin',
        component: './Live',
      },
      {
        path: '/watch-state/notification',
        name: '通知公告',
        // component: './Admin',
        component: './Notification/index',
      },
      // {
      //   path: '/watch-state/department',
      //   name: '部门管理',
      //   // component: './Admin',
      //   component: './Department/index',
      // },
    ],
  },

  {
    //path: '/admin',
    // path: '/watch-state',
    path: '/enterprise-management',
    name: '企业管理',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        //path: '/admin',
        // path: '/watch-state',
        path: '/enterprise-management',
        redirect: '/enterprise-management/sub-page',
      },
      {
        path: '/enterprise-management/department',
        name: '部门管理',
        // component: './Admin',
        component: './Department/index',
      },

      {
        path: '/enterprise-management/employee',
        name: '员工管理',
        icon: 'warning',
        // component: './Admin',
        component: './Employee/index',
      },
      {
        path: '/enterprise-management/meeting',
        name: '会议管理',
        icon: 'warning',
        // component: './Admin',
        component: './Meeting/index',
      },
      {
        path: '/enterprise-management/punch-record',
        name: '打卡记录管理',
        icon: 'warning',
        // component: './Admin',
        component: './Punch_record/index',
      },
      // {
      //   path: '/enterprise-management/notification',
      //   name: '通知公告',
      //   // component: './Admin',
      //   component: './Notification/index',
      // },
    ],
  },
  {
    path: '/construction-worker',
    name: '建筑工人',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        //path: '/admin',
        // path: '/watch-state',
        path: '/construction-worker',
        redirect: '/construction-worker/sub-page',
      },
      {
        path: '/construction-worker/project',
        name: '项目管理',
        // component: './Admin',
        component: './Project/index',
      },

      {
        path: '/construction-worker/advice-feedback',
        name: '意见反馈',
        icon: 'warning',
        // component: './Admin',
        component: './Advice/index',
      },
    ],
  },
  {
    path: '/electronic-certificate-management',
    name: '电子证明管理',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        //path: '/admin',
        // path: '/watch-state',
        path: '/electronic-certificate-management',
        redirect: '/electronic-certificate-management/sub-page',
      },
      {
        path: '/electronic-certificate-management/permit-certificate',
        name: '施工许可证管理',
        // component: './Admin',
        component: './PermitCertificate/index',
      },

      {
        path: '/electronic-certificate-management/qualification-certificate',
        name: '经营资质证管理',
        icon: 'warning',
        // component: './Admin',
        component: './QualificationCertificate/index',
      },
    ],
  },

  {
    path: '/integrity-information-management',
    name: '诚信信息管理',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        //path: '/admin',
        // path: '/watch-state',
        path: '/integrity-information-management',
        redirect: '/integrity-information-management/sub-page',
      },
      {
        path: '/integrity-information-management/enterprise-integrity-record-management',
        name: '企业诚信记录管理',
        // component: './Admin',
        component: './EnterpriseIntegrityRecord/index',
      },

      {
        path: '/integrity-information-management/person-integrity-record-management',
        name: '个人诚信记录管理',
        icon: 'warning',
        // component: './Admin',
        component: './PersonIntegrityRecord/index',
      },
      {
        path: '/integrity-information-management/blacklist-record-management',
        name: '黑名单记录管理',
        icon: 'warning',
        // component: './Admin',
        component: './BlacklistRecord/index',
      },
    ],
  },

  // {
  //   name: 'list.notification',
  //   // icon: 'table',
  //   icon: 'smile',
  //   path: '/notification',
  //   component: './Notification',
  // },
  // // {
  // //   name: 'list.department',
  // //   icon: 'table',
  // //   path: '/department',
  // //   component: './Department',
  // // },
  // {
  //   name: 'list.employee',
  //   icon: 'table',
  //   path: '/employee',
  //   component: './Employee',
  // },

  // {
  //   name: 'list.meeting',
  //   icon: 'table',
  //   path: '/meeting',
  //   component: './Meeting',
  // },
  // {
  //   name: 'list.punch_record',
  //   icon: 'table',
  //   path: '/punch_record',
  //   component: './Punch_record',
  // },
  // {
  //   name: 'list.project',
  //   icon: 'table',
  //   path: '/project',
  //   component: './Project',
  // },
  // {
  //   name: 'list.advice',
  //   icon: 'table',
  //   path: '/advice',
  //   component: './Advice',
  // },
  // {
  //   name: 'list.permitCertificate',
  //   icon: 'table',
  //   path: '/permitCertificate',
  //   component: './PermitCertificate',
  // },

  // {
  //   name: 'list.qualificationCertificate',
  //   icon: 'table',
  //   path: '/qualificationCertificate',
  //   component: './QualificationCertificate',
  // },
  // {
  //   name: 'list.enterpriseIntegrityRecord',
  //   icon: 'table',
  //   path: '/enterpriseIntegrityRecord',
  //   component: './EnterpriseIntegrityRecord',
  // },
  // {
  //   name: 'list.personIntegrityRecord',
  //   icon: 'table',
  //   path: '/personIntegrityRecord',
  //   component: './PersonIntegrityRecord',
  // },
  // {
  //   name: 'list.blacklistRecord',
  //   icon: 'table',
  //   path: '/blacklistRecord',
  //   component: './BlacklistRecord',
  // },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
