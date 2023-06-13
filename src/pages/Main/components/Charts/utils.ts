import { DualAxesConfig, Options } from '@ant-design/charts';

const getTotalScaleData = (dataSource: { time: string; data: number[] }[]) => {
  return dataSource.map((cur) => {
    return {
      time: cur.time,
      total: cur.data.reduce((pre, cur) => pre + cur),
    };
  });
};

type Keys = 'time' | 'value' | 'type';

type RespectiveScaleDataType = Record<Keys, string | number>[];
const getDualAxesConfig = ({
  respectiveScaleData,
  totalScaleData,
  yAxisConfig,
}: {
  respectiveScaleData: RespectiveScaleDataType;
  totalScaleData: {
    time: string;
    total: number;
  }[];
  yAxisConfig: Record<string, Options['yAxis']>;
}) => {
  const config: DualAxesConfig = {
    data: [respectiveScaleData, totalScaleData],
    padding: 'auto',
    autoFit: true,
    xField: 'time',
    yField: ['value', 'total'],
    meta: {
      total: {
        alias: '总规模',
      },
    },
    yAxis: yAxisConfig,
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
      },
    ],
  };
  return config;
};

export { getTotalScaleData, getDualAxesConfig };
export type { RespectiveScaleDataType };
