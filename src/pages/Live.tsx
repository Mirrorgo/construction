import { Card, Col, Image, Row, Typography } from 'antd';
import React from 'react';

function Live() {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Typography.Title level={1}>现场工地</Typography.Title>
          <Image
            width={400}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={12}>
          <Card>
            <Row>
              <div>工地范围:</div>
            </Row>
            <Row>
              <div>工作地点:</div>
            </Row>
            <Row>
              <div>设备类型:</div>
            </Row>
            <Row>
              <div>工地进展:</div>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Live;
