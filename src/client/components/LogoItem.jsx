import React from 'react'
import styled from 'styled-components';
import Logo from '../../../asserts/logo.svg';

const Container = styled.div`
margin: 5px;
`;

const LogoItem = () => {

  return (
    <Container>
      <img src={Logo} alt="Dcard" width={74.42} height={28} />
    </Container>
  )
}

export default LogoItem
