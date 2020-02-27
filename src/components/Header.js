import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  margin: 0;
`;

const HeaderWrapper = styled.header`
  background-color: #282c34;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 20px;
  cursor: pointer;
`;

const Header = props => {
  return (
    <HeaderWrapper>
      <Title>{props.text}</Title>
    </HeaderWrapper>
  );
};

export default Header;
