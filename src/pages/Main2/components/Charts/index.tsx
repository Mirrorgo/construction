import { Bar, BarConfig, Column, ColumnConfig, DualAxes, DualAxesConfig } from '@ant-design/charts';
import React, { FC } from 'react';
import { RespectiveScaleDataType } from './utils';

const Chart1: FC = () => {
  const data = [
    {
      type: '中国建筑',
      income: 14198.37,
    },
    {
      type: '中国中铁',
      income: 8484.4,
    },
    {
      type: '中国铁建',
      income: 8304.52,
    },
    {
      type: '中国交建',
      income: 5547.92,
    },
    {
      type: '中国中冶',
      income: 3386.38,
    },
    {
      type: '中国能建',
      income: 2472.91,
    },
    {
      type: '中国电建',
      income: 3477.13,
    },
    {
      type: '中国化学',
      income: 1041.29,
    },
  ];
  const config: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'income',
    label: {
      position: 'top',
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    yAxis: {
      min: 0,
      max: 16000,
    },
    meta: {
      type: {
        alias: '类别',
      },
      income: {
        alias: '营业总收入',
      },
    },
  };
  return <Column {...config} />;
};

const Chart2: FC = () => {
  const data = [
    {
      time: '2015',
      value: 47761,
      rate: 7.3,
    },
    {
      time: '2016',
      value: 51499,
      rate: 7.7,
    },
    {
      time: '2017',
      value: 57906,
      rate: 3.9,
    },
    {
      time: '2018',
      value: 65493,
      rate: 4.8,
    },
    {
      time: '2019',
      value: 70904,
      rate: 5.6,
    },
  ];
  const config: DualAxesConfig = {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'rate'],
    geometryOptions: [
      {
        geometry: 'column',
        label: {
          position: 'top',
        },
      },
      {
        geometry: 'line',
        smooth: true,
        lineStyle: {
          lineWidth: 2,
        },
        point: {
          size: 4,
        },
        label: {
          position: 'top',
        },
      },
    ],
    meta: {
      value: {
        alias: '中国建筑业增加值（亿元）',
      },
      rate: {
        alias: '增长率（%）',
      },
    },
    yAxis: {
      value: {
        min: 0,
        max: 80000,
      },
      rate: {
        min: 0,
        max: 8.4,
      },
    },
  };
  return <DualAxes {...config} />;
};

const Chart3: FC = () => {
  const data = [
    {
      type: '中国交通建设集团有限公司',
      income: 213.5,
    },
    {
      type: '中国电力建设集团有限公司',
      income: 130.1,
    },
    {
      type: '中国建筑有限公司',
      income: 107.5,
    },
    {
      type: '中国铁道建筑有限公司',
      income: 83.8,
    },
    {
      type: '中国铁路工程集团有限公司',
      income: 74.2,
    },
    {
      type: '中国化学工程集团有限公司',
      income: 42.2,
    },
    {
      type: '中国能源建设集团有限公司',
      income: 41.8,
    },
    {
      type: '中国石油工程建设（集团）公司',
      income: 33.4,
    },
    {
      type: '中国机械工业集团公司',
      income: 31.1,
    },
    {
      type: '上海电气集团股份有限公司',
      income: 17.3,
    },
    {
      type: '中国冶金科工集团有限公司',
      income: 16.6,
    },
    {
      type: '中国中原对外工程有限公司',
      income: 16.4,
    },
    {
      type: '中国中材国际工程股份有限公司',
      income: 13.0,
    },
    {
      type: '中信建设有限责任公司',
      income: 12.4,
    },
    {
      type: '中国通用技术（集团）控股有限责任公司',
      income: 11.5,
    },
    {
      type: '中国江西国际经济技术合作公司',
      income: 10.2,
    },
    {
      type: '中国电力技术装备有限公司',
      income: 10.2,
    },
    {
      type: '江西中煤建设集团有限公司',
      income: 9.9,
    },
    {
      type: '哈尔滨电气国际工程有限公司',
      income: 9.4,
    },
    {
      type: '北方国际合作股份有限公司',
      income: 8.9,
    },
  ];
  const config: BarConfig = {
    data,
    xField: 'income',
    yField: 'type',
    seriesField: 'type',
    legend: false,
    label: {
      position: 'right',
    },
    meta: {
      type: {
        alias: '类别',
      },
      income: {
        alias: '收入',
      },
    },
  };
  return <Bar {...config} />;
};

const Chart4: FC = () => {
  const dataSource = [
    {
      time: '2016',
      data: [374272, 212768],
    },
    {
      time: '2017',
      data: [439524, 274666],
    },
    {
      time: '2018',
      data: [494409, 272854],
    },
    {
      time: '2019',
      data: [545039, 289235],
    },
    {
      time: '2020',
      data: [595577, 325174],
    },
    {
      time: '2021',
      data: [656887, 344558],
    },
  ];
  const respectiveScaleData: RespectiveScaleDataType = [];
  dataSource.forEach((cur) => {
    const item1 = {
      time: cur.time,
      value: cur.data[0],
      type: '建筑业企业签订合同总额(亿元)',
    };
    const item2 = {
      time: cur.time,
      value: cur.data[1],
      type: '其中:新签合同额(亿元)',
    };
    respectiveScaleData.push(item1);
    respectiveScaleData.push(item2);
  });

  const rateData = [
    {
      time: '2016',
      rate: 56.85,
    },
    {
      time: '2017',
      rate: 57.94,
    },
    {
      time: '2018',
      rate: 55.19,
    },
    {
      time: '2019',
      rate: 53.07,
    },
    {
      time: '2020',
      rate: 54.6,
    },
    {
      time: '2021',
      rate: 52.45,
    },
  ];
  const config: DualAxesConfig = {
    data: [respectiveScaleData, rateData],
    padding: 'auto',
    autoFit: true,
    xField: 'time',
    yField: ['value', 'rate'],
    meta: {
      rate: {
        alias: '占签订合同总额比例(%)',
      },
    },
    yAxis: {
      value: {
        min: 0,
        max: 700000,
      },
      rate: {
        min: 49,
        max: 59,
      },
    },
    geometryOptions: [
      {
        geometry: 'column',
        isGroup: true,
        seriesField: 'type',
      },
      {
        geometry: 'line',
        lineStyle: {
          lineWidth: 2,
        },
        label: {
          position: 'top',
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

export { Chart1, Chart2, Chart3, Chart4 };
