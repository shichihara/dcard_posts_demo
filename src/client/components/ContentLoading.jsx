import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: 120px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

const Title = styled.div`
  background: linear-gradient(-45deg, #e3dede, #d1cdcd, #c2c0c0, #bab8b8);
  background-size: 400% 400%;
  animation: gradient 1.5s ease infinite;
  width: 120px;
  height: 15px;
  border-radius: 8px;
  margin-bottom: 10px;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Content = styled.div`
  background: linear-gradient(-45deg, #e3dede, #d1cdcd, #c2c0c0, #bab8b8);
  background-size: 400% 400%;
  animation: gradient 1.5s ease infinite;
  width: 180px;
  height: 15px;
  border-radius: 8px;
  margin-bottom: 10px;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ContentLoading = () => {
  return (
    <Container>
      <Title/>
      <Content/>
      <Content/>
    </Container>
  )
}

export default ContentLoading
