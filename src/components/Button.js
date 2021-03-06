import React from "react";
import styled from "styled-components";

const typeButton = { primary: Boolean, type: String, text: String };

const Btn = styled("button", typeButton)`
  padding: 0.25em 1em;
  background-color: ${props => (props.primary ? "#fff" : "#0057aa")};
  color: ${props => (props.primary ? "#0057aa" : "#fff")};
  width: 80px;
  margin-left: 1em;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = props => {
  return <Btn type={`${props.type}`} primary={props.primary}>{`${props.text}`}</Btn>;
};

export default Button;
