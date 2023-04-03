import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import BannerCard from '../../../../components/cards/BannerCard';
import { BannerCardStyleWrap } from '../../../styled';

// const RightAside = lazy(() => import('./RightAside'));
const ActivityContent = lazy(() => import('./ActivityContent'));

function Activity() {
  return (
    <Row gutter={25}>
      <Col xxl={12} md={16} xs={24}>
        <Suspense
          fallback={
            <Cards headless>
              <Skeleton active paragraph={{ rows: 10 }} />
            </Cards>
          }
        >
          <ActivityContent />
        </Suspense>
      </Col>
      <Col md={16} xxl={12} xs={24}>
        <Suspense
          fallback={
            <Cards headless>
              <Skeleton active paragraph={{ rows: 10 }} />
            </Cards>
          }
        >
          <Col>
            <BannerCardStyleWrap>
            <h2 style={{font: '1000px'}}>Top Proposal and Grant</h2>
              <Cards headless>
                <Row gutter="25">
                  <Row xxl={8} md={12} className="mb-25">
                    <BannerCard
                      item={{
                        id: 2,
                        type: 'border',
                        icon: 'layers.svg',
                        title: 'Dark Color',
                        content:
                          'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                        authorName: 'Barbara Marion',
                        authorImg: '10.png',
                      }}
                    />
                  </Row>
                  <Row xxl={8} md={12} className="mb-25">
                    <BannerCard
                      item={{
                        id: 2,
                        type: 'border',
                        icon: 'cloud.svg',
                        title: 'Dark Color',
                        content:
                          'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                        authorName: 'Barbara Marion',
                        authorImg: '10.png',
                      }}
                    />
                  </Row>
                  <Row xxl={8} md={12} className="mb-25">
                    <BannerCard
                      item={{
                        id: 3,
                        type: 'border',
                        bgImage: '',
                        icon: 'camera.svg',
                        title: 'Image',
                        content:
                          'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                        authorName: 'Garry Sobars',
                        authorImg: '10.png',
                      }}
                    />
                  </Row>
                </Row>
              </Cards>
            </BannerCardStyleWrap>
          </Col>
        </Suspense>
      </Col>
    </Row>
  );
}

export default Activity;
