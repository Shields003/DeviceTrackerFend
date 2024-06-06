import React from "react";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import Modal from "react-modal";

//Styled components
const theme = {
  colors: {
    primary: "#284b63", // primary color (blue)
    complementary1: "#3c6e71", // complementary color 1 (dark blue/green)
    complementary2: "#d9d9d9", // complementary color 2 (gray)
    accent: "#1985a1", // accent color (blue/green)
    accent2: "#f59311", // accent color 2 (orange)
    dark: "#353535", // dark color (dark gray)
    text: "#ffffff", // text color (white)
    alert: "#eb5e28", // alert color (orange/red)
  },
};

const HeaderTable = styled.table`
  margin-right: 12px;
  width: 86vw;
  max-width: 86vw;
  max-height: 60vh;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

`;

const TableHeader = styled.th`
  color: ${theme.colors.text};
  padding: 1em;
  background-color: ${theme.colors.primary};
  height: 30px;
  overflow-y: hidden;
`;

const HeaderRow = styled.tr`
  table-layout: fixed;
  position: static;
  height: 30px;
  overflow: hidden;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #fbfbfb;
  }
  &:nth-child(even) {
    background-color: rgb(255, 255, 255);
  }
  &:nth-child(even):hover {
    background-color: #fbfbfb;
  }
`;

Modal.setAppElement("#root");

//this is a basic arrow function that displays the roster header

const RosterHeader = () => {
  return (
    <Container>
      <HeaderTable>
        <HeaderRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Rank</TableHeader>
          <TableHeader>Unit</TableHeader>
          <TableHeader>Departure Date</TableHeader>
          <TableHeader>Arival Date</TableHeader>
          <TableHeader>Gaining Unit</TableHeader>
          <TableHeader>Losing Unti</TableHeader>
          <TableHeader>Email</TableHeader>
        </HeaderRow>
      </HeaderTable>
    </Container>
  );
};

export default RosterHeader;
