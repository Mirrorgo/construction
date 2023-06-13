import { DualAxes, DualAxesConfig, Line, LineConfig, Pie, PieConfig } from '@ant-design/charts';
import React, { FC } from 'react';
import { RespectiveScaleDataType, getDualAxesConfig, getTotalScaleData } from './utils';

const Chart1: FC = () => {
  const data = [
    {
      year: '2011',
      scales: 6.75,
    },
    {
      year: '2012',
      scales: 6.85,
    },
    {
      year: '2013',
      scales: 6.9,
    },
    {
      year: '2014',
      scales: 7.05,
    },
    {
      year: '2015',
      scales: 6.93,
    },
    {
      year: '2016',
      scales: 6.9,
    },
    {
      year: '2017',
      scales: 6.96,
    },
    {
      year: '2018',
      scales: 7.12,
    },
    {
      year: '2019',
      scales: 7.16,
    },
    {
      year: '2020',
      scales: 7.18,
    },
  ];

  const config: LineConfig = {
    data,
    padding: 'auto',
    autoFit: true,
    xField: 'year',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    yAxis: {
      maxLimit: 7.3,
      minLimit: 6.5,
    },
    point: {
      size: 5,
      style: {
        lineCap: 'square',
      },
    },
  };

  return <Line {...config} />;
};

const Chart2: FC = () => {
  const dataSource = [
    {
      time: '2015',
      data: [2441, 2864],
    },
    {
      time: '2016',
      data: [2596, 2875],
    },
    {
      time: '2017',
      data: [2752, 2854],
    },
    {
      time: '2018',
      data: [2874, 2803],
    },
    {
      time: '2019',
      data: [3014, 2729],
    },
    {
      time: '2020',
      data: [3146, 2590],
    },
  ];
  const respectiveScaleData: RespectiveScaleDataType = [];
  dataSource.forEach((cur) => {
    const item1 = {
      time: cur.time,
      value: cur.data[0],
      type: '存量智能建筑需求规模(亿元)',
    };
    const item2 = {
      time: cur.time,
      value: cur.data[1],
      type: '新增智能建筑总需求规模(亿元)',
    };
    respectiveScaleData.push(item1);
    respectiveScaleData.push(item2);
  });

  const totalScaleData = getTotalScaleData(dataSource);
  const config = getDualAxesConfig({
    respectiveScaleData,
    totalScaleData,
    yAxisConfig: {
      value: {
        min: 0,
        max: 6000,
      },
      // total: false,
      total: {
        min: 0,
        max: 6000,
      },
    },
  });
  return <DualAxes {...config} />;
};

const Chart3: FC = () => {
  const dataSource = [
    {
      time: '2015',
      data: [1300, 478, 663],
    },
    {
      time: '2016',
      data: [1345, 497, 754],
    },
    {
      time: '2017',
      data: [1377, 543, 832],
    },
    {
      time: '2018',
      data: [1407, 612, 855],
    },
    {
      time: '2019',
      data: [1438, 658, 918],
    },
    {
      time: '2020',
      data: [1468, 701, 976],
    },
  ];
  const respectiveScaleData: RespectiveScaleDataType = [];
  dataSource.forEach((cur) => {
    const item1 = {
      time: cur.time,
      value: cur.data[0],
      type: '存量住宅建筑智能化规模(亿元)',
    };
    const item2 = {
      time: cur.time,
      value: cur.data[1],
      type: '存量厂房及建筑物智能化规模(亿元)',
    };
    const item3 = {
      time: cur.time,
      value: cur.data[2],
      type: '存量公共建筑智能化规模(亿元)',
    };
    respectiveScaleData.push(item1);
    respectiveScaleData.push(item2);
    respectiveScaleData.push(item3);
  });

  const totalScaleData = getTotalScaleData(dataSource);
  const config: DualAxesConfig = getDualAxesConfig({
    respectiveScaleData,
    totalScaleData,
    yAxisConfig: {
      value: {
        min: 0,
        max: 3500,
      },
      // total: false,
      total: {
        min: 0,
        max: 3500,
      },
    },
  });
  return <DualAxes {...config} />;
};

const Chart4: FC = () => {
  const data = [
    {
      type: '厂房及建筑物',
      value: 12.6,
    },
    {
      type: '商业及服务用房',
      value: 6.68,
    },
    {
      type: '其他',
      value: 13.4,
    },
    {
      type: '住宅房屋',
      value: 67.32,
    },
  ];
  const config: PieConfig = {
    appendPadding: 10,
    padding: 'auto',
    autoFit: true,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

const Chart5: FC = () => {
  const dataSource = [
    {
      time: '2015',
      data: [1704, 766, 394],
    },
    {
      time: '2016',
      data: [1704, 796, 374],
    },
    {
      time: '2017',
      data: [1682, 799, 373],
    },
    {
      time: '2018',
      data: [1670, 750, 383],
    },
    {
      time: '2019',
      data: [1626, 734, 368],
    },
    {
      time: '2020',
      data: [1555, 672, 364],
    },
  ];
  const respectiveScaleData: RespectiveScaleDataType = [];
  dataSource.forEach((cur) => {
    const item1 = {
      time: cur.time,
      value: cur.data[0],
      type: '新增住宅建筑智能化规模(亿元)',
    };
    const item2 = {
      time: cur.time,
      value: cur.data[1],
      type: '新增厂房及建筑物智能化规模(亿元)',
    };
    const item3 = {
      time: cur.time,
      value: cur.data[2],
      type: '新增公共建筑智能化规模(亿元)',
    };
    respectiveScaleData.push(item1);
    respectiveScaleData.push(item2);
    respectiveScaleData.push(item3);
  });

  const totalScaleData = getTotalScaleData(dataSource);
  const config: DualAxesConfig = getDualAxesConfig({
    respectiveScaleData,
    totalScaleData,
    yAxisConfig: {
      value: {
        min: 0,
        max: 3500,
      },
      // total: false,
      total: {
        min: 0,
        max: 3500,
      },
    },
  });
  return <DualAxes {...config} />;
};

const Chart6: FC = () => {
  const data = [
    {
      type: '港澳台投资建筑业企业',
      value: 12.6,
    },
    {
      type: '国有建筑业企业',
      value: 6.68,
    },
    {
      type: '外商投资建筑业企业',
      value: 13.4,
    },
    {
      type: '集体建筑业企业',
      value: 60,
    },
    {
      type: '其他建筑业企业',
      value: 7.32,
    },
  ];
  const config: PieConfig = {
    appendPadding: 10,
    data,
    padding: 'auto',
    autoFit: true,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export { Chart1, Chart2, Chart3, Chart4, Chart5, Chart6 };
