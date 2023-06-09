import React from 'react';
import styled from 'styled-components';

// Define your styled components
const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Table = styled.table`
  background-color: white;
  border-collapse: collapse;
  width: 80%;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

// Define your component
const totalsTable = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>

      {isModalOpen && (
        <Modal onClick={handleCloseModal}>
          <Table>
            <thead>
              <tr>
                <Th>Total</Th>
                <Th>Unit1</Th>
                <Th>Unit2</Th>
                {/* Add more Th components as needed */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>Value1</Td>
                <Td>Value2</Td>
                <Td>Value3</Td>
                {/* Add more Td components as needed */}
              </tr>
              {/* Add more tr components as needed */}
            </tbody>
          </Table>
        </Modal>
      )}
    </div>
  );
};

export default totalsTable;
