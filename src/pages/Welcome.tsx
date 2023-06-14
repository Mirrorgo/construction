import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        更多信息 {'>'}
      </a>
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage: "url('/img/planet_1.svg')",
            // "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            欢迎使用建筑行业征信管理系统
          </div>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            建筑行业征信管理系统是一种用于管理和评估建筑行业相关参与方信用状况的系统。它利用信息技术和数据分析手段，收集、整合和分析建筑行业参与方的信用信息，
            为决策者提供准确、可靠的信用评估和风险管理工具。
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="https://www.hanghangcha.com/"
              title="数据收集"
              desc="该系统通过多种渠道收集建筑行业相关参与方的信用信息。这些信息包括企业基本信息、经营状况、项目执行能力、财务状况、履约记录等。数据来源可以包括企业自行申报、公共数据库、第三方机构报告等。"
            />
            <InfoCard
              index={2}
              title="信用评估"
              href="https://wiki.mbalib.com/wiki/%E4%BF%A1%E7%94%A8%E8%AF%84%E4%BC%B0%E6%A8%A1%E5%9E%8B"
              desc="系统基于收集到的信用信息，采用各种评估模型和算法，对建筑行业参与方的信用状况进行评估和打分。评估结果可以反映企业的信用等级、风险指标和可靠性水平，为决策者提供参考依据"
            />
            <InfoCard
              index={3}
              title="监管监督"
              href="https://jzsc.mohurd.gov.cn/home"
              desc="建筑行业征信管理系统可以作为监管部门的监督工具。监管部门可以监控建筑行业参与方的信用状况和行为，及时发现违法违规行为，并采取相应的监管措施。"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={4}
              href="https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E6%95%B4%E5%90%88"
              title="数据整合"
              desc="系统将收集到的信用信息进行整合和管理，建立起完整的信用档案。这些档案可以按照参与方的不同属性进行分类和索引，便于查询和分析。"
            />
            <InfoCard
              index={5}
              title="数据共享"
              href="https://zhuanlan.zhihu.com/p/591747275"
              desc="系统支持建筑行业参与方之间的信息共享和查询。参与方可以通过系统查询其他企业的信用信息，了解其信用状况和风险指标。这有助于提高行业的透明度和信任度，促进良性竞争和合作。"
            />
            <InfoCard
              index={6}
              title="风险管理"
              href="https://zhuanlan.zhihu.com/p/628614372"
              desc="系统能够帮助决策者识别和评估建筑行业参与方的潜在风险。通过分析信用评估结果和其他相关信息，系统可以发现潜在的违约风险、财务风险、项目执行风险等，并提供相应的风险预警和应对建议。"
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
