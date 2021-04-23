import React from 'react';
import styled from 'styled-components';
import LogoItem from './LogoItem';
import SearchBar from './SearchBar';

const Banner = styled.div`
    height: 48px;
    width: 100%;
    display: flex;
    background: rgb(0, 106, 166);
    text-align: center;
    vertical-align: middle;
  `;

const Container = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: auto;
  padding: 0px 20px;
  display: flex;
  -moz-box-align: center;
  align-items: center;
`;

const Header = () => {

  return (
    <Banner>
      <Container>
        <LogoItem/>
        <SearchBar/>
      </Container>
    </Banner>
  )
}

export default Header
