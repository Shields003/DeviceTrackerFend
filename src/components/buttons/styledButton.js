import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  margin-right: 40px;
  margin-left: 40px;
  cursor: pointer;
  font-weight: 600;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor || "initial"};
  border: 2px solid ${(props) => props.color};
  &:hover {
    background-color: #fca311;
    border: 2px solid #fca311;
    color: white;
`;

const StyledButton = ({ color, children, ...props }) => {
  return (
    <Button color={color} {...props}>
      {children}
    </Button>
  );
};

export default StyledButton;
