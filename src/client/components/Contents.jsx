import React from 'react';
import { 
  Link, 
  Route,
  Switch,
  useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Popular from '../pages/posts/Popular';
import Lastest from '../pages/posts/Lastest';


const Container = styled.div`
  max-width: 800px;
  background-color: white;
  width: caclc(100% - 50px);
  margin: 10px auto;
  border-radius: 5px;
  background-color: white;
`;

const TabContainer = styled.div`
  background-color: white;
  top: 48px;
  padding: 20px 60px 0px;
  z-index: 10;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px 4px 0px 0px;
`;

const Tabs = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 60px;
`;

const TabItem = styled.div`
  height: 60px;
  position: relative;
  width: 64px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  z-index: 10;
  padding-bottom: 1px;

  a {
    text-decoration: none;
    position: absolute;
    color: rgb(0, 0, 0);
    cursor: pointer;
    padding: 0px 16px;
    font-weight: 500;
    height: 58px;
    line-height: 60px;
    font-size: 16px;

    border-bottom: ${props => (props.location === props.link 
      ? '2px solid rgb(51, 151, 207)' 
      : '1px transparent'
    )};
  }
  
  a:hover, a:active{
    color: rgb(0, 0, 0);
  }
  
  a:link {
    color: ${props => (props.location === props.link 
      ? 'rgb(0, 0, 0)' 
      : 'rgba(0, 0, 0, 0.35)'
    )};
  }
`;

const PageContainer = styled.div`
  padding: 0 50px;
  background-color: white;
`;

const Contents = () => {
  const location = useLocation().pathname;
  return (
    <Container>
      <TabContainer>
        <Tabs >
          <TabItem location={location} link='/'>
            <Link to="/">熱門</Link>
          </TabItem>
          <TabItem location={location} link='/lastest'>
            <Link to="/lastest">最新</Link>
          </TabItem>
        </Tabs>
      </TabContainer>
      <PageContainer>
        <Switch>
          <Route path='/' exact component={ Popular }/>
          <Route path='/lastest' component={ Lastest } />
        </Switch>
      </PageContainer>
    </Container>
  )
}

export default Contents
