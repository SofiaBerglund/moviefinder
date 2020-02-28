import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 5px;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  width: 80px;
  margin-left: 5px;
`;

const Button = (props) => {
  return <Btn type={`${props.type}`}>{`${props.text}`}</Btn>;
};

export default Button;
