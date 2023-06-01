import React from "react";
import styled from "@emotion/styled";
import Pagination from "./Pagination";

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;


const ModalContent = ({ onClose }) => {
  // Placeholder data for military units and total devices
  const militaryUnits = [
    { name: "Unit 1", totalDevices: 10 },
    { name: "Unit 2", totalDevices: 20 },
    { name: "Unit 3", totalDevices: 15 },
    // ...add more units as needed
  ];

  return (
    <>
      <ModalHeader>
        <h2>Total Devices per Military Unit</h2>
        <button onClick={onClose}>Close</button>
      </ModalHeader>
      <div>
        {/* Render the total devices per military unit */}
        {militaryUnits.map((unit) => (
          <div key={unit.name}>
            <h3>{unit.name}</h3>
            <p>Total Devices: {unit.totalDevices}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={1} // Set the initial current page
        totalPages={Math.ceil(militaryUnits.length / 25)} // Calculate the total number of pages based on the items per page
        onPageChange={(page) => {
          console.log("Page changed:", page);
        }}
      />
    </>
  );
};

export default ModalContent;
