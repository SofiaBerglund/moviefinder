import React from "react";
import styled from 'styled-components';

const Title = styled.h2`
    margin: 0;
    color: lightblue;
`

const Header = props => {
  return (
    <header className="App-header">
      <Title>{props.text}</Title>
    </header>
  );
};

export default Header;
