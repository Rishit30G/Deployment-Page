import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
// import { ResponsiveMasonry } from 'react-responsive-masonry';
import FeatherIcon from 'feather-icons-react';
// import Masonry from 'react-masonry-css';
import { ArrowRightOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Main, BannerCardStyleWrap } from '../styled';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import BannerCard from '../../components/cards/BannerCard';
import { PopularArticleWrap } from '../pages/knowledgeBase/style';
import articles from '../../demoData/article.json';

const SocialMediaOverview = lazy(() => import('./overview/index/SocialMediaOverview'));
const FacebookOverview = lazy(() => import('./overview/index/FacebookOverview'));
// const YoutubeSubscribers = lazy(() => import('./overview/index/YoutubeSubscribers'));
// const TwitterOverview = lazy(() => import('./overview/index/TwitterOverview'));
// const InstagramOverview = lazy(() => import('./overview/index/InstagramOverview'));
// const LinkedinKeyMetrics = lazy(() => import('./overview/index/LinkedinKeyMetrics'));
const SocialTrafficMetrics = lazy(() => import('./overview/index/SocialTrafficMetrics'));

function Dashboard() {
  return (
    <>
      <PageHeader
        ghost
        title="Tickers"
        buttons={[
          <div key="6" className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>        
        <Row gutter={25}>
          <Col xxl={24} lg={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SocialMediaOverview />
            </Suspense>
          </Col>
          </Row>

          <Row xxl={10}>
          <Col xxl={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <FacebookOverview />
            </Suspense>
          </Col>
          </Row>

          {/* <Col xxl={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <YoutubeSubscribers />
            </Suspense>
          </Col> */}
          {/* <Col xxl={8} md={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TwitterOverview />
            </Suspense>
          </Col>
          <Col xxl={8} md={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <InstagramOverview />
            </Suspense>
          </Col>
          <Col xxl={8} md={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <LinkedinKeyMetrics />
            </Suspense>
          </Col> */}
          <Row gutter={25}> 
          <Col xxl={8}> 
          <h2 style={{font: '1000px'}}>  Top Discussion</h2>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SocialTrafficMetrics />
            </Suspense>
          </Col>
          <Col xxl={8} xs={24}>
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
          <Col xxl={8}>
          <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >

          <PopularArticleWrap>
              <div className="sDash_popular-article sDash_popular-article-container">
                <h2 className="sDash_popular-article__title">Popular articles</h2>
                {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 767: 2, 900: 3 }}>
                  <Masonry className="sDash_popular-article__box" gutter="15px"> */}
                  <Row xxl={12}>
                    {articles.map((article, i) => (
                      <div className={`sDash_popular-article__single theme-${article.type}`} key={i}>
                        <h4 className="single-article-title">{article.title}</h4>
                        <p>{article.text}</p>
                        <Link className="btn-link" to="/admin/knowledgebaseSingle/1">
                          Read more
                          <ArrowRightOutlined />
                        </Link>
                      </div>
                    ))}
                 </Row>
                  {/* </Masonry>
                </ResponsiveMasonry> */}
              </div>
            </PopularArticleWrap>
            </Suspense>
            
           
          </Col>
         </Row>
      </Main>
    </>
  );
}

export default Dashboard;
