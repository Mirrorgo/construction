import { Card, Col, Image, Row, Typography } from 'antd';
import React from 'react';
import logo1 from '/public/img/建筑行业照片-1.png';
import logo2 from '/public/img/建筑行业照片-2.png';
import logo3 from '/public/img/建筑行业照片-3.png';
import logo4 from '/public/img/建筑行业照片-4.png';
function Live() {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={10}>
          <Typography.Title level={1}>现场工地监督</Typography.Title>
          <Image width={250} src={logo1} />

          <Image
            width={250}
            src={logo2}
            // src="./img/建筑行业照片-1.png"
          />

          <Image
            width={250}
            src={logo3}
            // src="./img/建筑行业照片-2.png"
          />
          <Image width={250} src={logo4} />
        </Col>
        <Col span={20}>
          <Card>
            <Row>
              <div>工作人员: 500</div>
            </Row>
            <Row>
              <div>工作地点: 辽宁省沈阳市 </div>
            </Row>
            <Row>
              <div>设备类型: 重型设备</div>
            </Row>
            <Row>
              <div>工地进展: 进度80%</div>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Live;
