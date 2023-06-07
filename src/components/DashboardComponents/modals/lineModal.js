import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { FaExpandAlt } from "react-icons/fa";
import styled from "@emotion/styled";

// Define your theme
const theme = {
  colors: {
    primary: "#284b63",
    complementary1: "#3c6e71",
    complementary2: "#d9d9d9",
    accent: "#1985a1",
    dark: "#353535",
    text: "#ffffff",
    alert: "#eb5e28",
  },
};

// Style your button
const Button = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.text};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: ${theme.colors.accent};
  }
`;

// Style your modal
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${theme.colors.complementary2};
  padding: 0px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartContainer = styled.div`
  width: 500px;
  height: 500px;
`;

const data = [
  ["Unit Compliance", "Totals"],
  ["iPads", 24248],
  ["iPhones", 5715],
  ["iMacs", 1414],
  ["Mac Books", 477],
  ["Other", 152],
];

const PieModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Modal>
        <ModalContent>
          <ChartContainer>
            <Chart data={data} />
          </ChartContainer>
          <FaExpandAlt
            onClick={setModalOpen}
            style={{ cursor: "pointer", margin: "1em" }}
          />
        </ModalContent>
      </Modal>
      : (<Button onClick={() => setModalOpen(true)}>Open Modal</Button>)
    </div>
  );
};

export default PieModal;
