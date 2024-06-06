import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import mockData from "../searchPageComponents/mockData/mockData.js";
import mockHistory from "../searchPageComponents/mockData/mockHistory.js";
import rosterMockData from "../searchPageComponents/mockData/rosterMockData.js";
import Modal from "react-modal";
// import ModalStyles from "../../../styles/ModalStyles.css";
import StyledButton from "../buttons/styledButton.js";
// import ConfirmModal from "./confirmModal";
import CloseIcon from "@mui/icons-material/Close";

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

const SearchContainer = styled.div`
  width: 100%;
  padding-top: 1em;
  justify-content: center;
  align-items: center;
  width: 85vw;
  max-width: 85vw;
  max-height: 60vh;
  overflow-y: hidden; // Enables vertical scrolling
  margin: 0 auto;
`;

const SubContainer = styled.div`
  width: 85vw;
  max-width: 85vw;
  border-bottom: 3px solid ${theme.colors.primary};
  overflow-x: hidden; // Enables vertical scrolling
  overflow-y: hidden; // Enables vertical scrolling
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  max-height: 60vh;
  table-layout: fixed; /* Ensures fixed column widths */
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  margin: 0 auto;
`;

const HeaderTable = styled.table`
  border: 3px solid ${theme.colors.primary};
  postion: sticky;
  width: 85vw;
  max-width: 85vw;
  table-layout: fixed; /* Ensures fixed column widths */
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  margin: 0 auto;
  border-collapse: collapse;
  position: sticky;
  top: 0;
`;

const TableHeader = styled.th`
  position: sticky;
  color: ${theme.colors.text};
  padding: 1em;
  background-color: ${theme.colors.primary};
  height: 30px;
  overflow-y: hidden;
  width: calc(85vw / 8); /* Divide by the number of columns */
  border: 1px solid white;
`;

const TableCell = styled.td`
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  max-width: 30px;
  box-shadow: 0px 0px 5px 5px gray;
  width: calc(85vw / 8); /* Ensure matching width with header */
`;

const HeaderRow = styled.tr`
  display: table;
  width: 100%
  table-layout: fixed;
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

const TableRow = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
  height: 30px;
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

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 80vh;
  z-index: 20;
`;

const ModalHeader = styled.div`
  position: relative; // This is important
  display: flex;
  justify-content: center; // To center the title
  align-items: center; // Vertical alignment
  border-bottom: 1px solid ${theme.colors.complementary2};
  padding: 5px;
  z-index: 20;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: ${theme.colors.primary};
  z-index: 20;
`;

const DataWrapper = styled.div`
  border: 2px solid ${theme.colors.primary};
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin: 2em;
  padding: 2em;
`;

const DataSection = styled.div`
  margin-right: 2em;
  padding-top: 10px;
`;

const DataLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
  color: ${theme.colors.primary};
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute; // Absolutely position this button
  top: 10px; // Adjust as necessary
  right: 10px; // Adjust as necessary
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.alert};
  color: ${theme.colors.text};
  margin: 0 10px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  height: 40px;
  width: 55px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.accent2};
  }
`;

const StyledInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.primary});
  background-color: white;
  width: 450px;
  padding: 5px;
  margin-bottom: 10px;
  outline: none;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${theme.colors.primary};
  }
`;

const StyledInputAlt = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.primary});
  background-color: ${theme.colors.complementary2};
  width: 450px;
  padding: 5px;
  margin-bottom: 10px;
  outline: none;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${theme.colors.primary};
  }
`;

const SectionTitle = styled.div`
  font-size: 1.3em;
  text-decoration: underline;
  margin-bottom: 10px;
  color: ${theme.colors.primary};
  margin-bottom: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeviceHistory = styled.div`
  padding: 10px;
  overflow-y: auto;
  color: ${theme.colors.primary};
`;

const HistoryTable = styled.table`
  background-color: white;
  max-width: 900px;
  border-collapse: collapse;
  margin: 10px;
  margin-top: 60px;
`;

const HistoryHeader = styled.th`
  color: ${theme.colors.text};
  padding: 5px;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.complementary2};
`;

const HistoryCell = styled.td`
  padding: 0.5em;
  border: 1px solid ${theme.colors.complementary2};
  text-align: center;
  vertical-align: top;
`;

const HistoryRow = styled.tr`
  &:nth-child(even) {
    background-color: ${theme.colors.complementary2};
  }
  &:nth-child(odd) {
    background-color: white;
  }
  &:hover {
    background-color: ${theme.colors.accent2};
  }
`;

const mockHistoryData = [
  {
    unit: "55th ISS, Offutt AFB",
    arrival: "2022-04-10",
    departure: "2022-05-10",
    reason: "PCS",
  },
  {
    unit: "97th IS, Offutt AFB",
    arrival: "2023-03-15",
    departure: "2023-04-20",
    reason: "PCA",
  },
  {
    unit: "9th RS, Beale AFB",
    arrival: "2023-11-01",
    departure: "2024-01-10",
    reason: "TDY/Deploy",
  },
  {
    unit: "480th ISR, Langley AFB",
    arrival: "2024-01-20",
    departure: "2024-03-25",
    reason: "PCS",
  },
  {
    unit: "548th ISR, Beale AFB",
    arrival: "2024-04-01",
    departure: "2024-05-22",
    reason: "PCA",
  },
];

Modal.setAppElement("#root");

function RosterResults({ allData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(500);
  const [currentData, setCurrentData] = useState([]);
  const [currentData2, setCurrentData2] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isChanged, setIsChanged] = useState(false);

  const handleEditClick = () => {
    if (isEditable) {
      setSelectedData(editData);
    } else {
      setEditData({ ...selectedData });
    }
    setIsEditable(!isEditable);
  };

  const handleInputChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRowClick = (row, value) => {
    setSelectedData(row);
    setIsModalOpen(true);
  };

  const handleSaveClick = () => {
    setIsEditable(false);
  };

  const handleDeleteClick = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete? This change cannot be undone."
    );

    if (isConfirmed) {
      // Call your delete function/logic here.
    }
  };

  useEffect(() => {
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    setCurrentData(rosterMockData.slice(indexOfFirstRow, indexOfLastRow));
    // setCurrentData2(mockHistory.slice(indexOfFirstRow, indexOfLastRow));
  }, [allData, currentPage]);
  
  // useEffect(() => {
  //   const indexOfLastRow = currentPage * rowsPerPage;
  //   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  //   // setCurrentData(rosterMockData.slice(indexOfFirstRow, indexOfLastRow));
  //   setCurrentData2(mockHistory.slice(indexOfFirstRow, indexOfLastRow));
  // }, [allData, currentPage]);

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
      <SubContainer>
        <SearchContainer>
          <Table>
            {currentData.map((row, index) => (
              <TableRow key={index} onClick={() => handleRowClick(row)}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.rank}</TableCell>
                <TableCell>{row.unit}</TableCell>
                <TableCell>{row.departureDate}</TableCell>
                <TableCell>{row.arrivalDate}</TableCell>
                <TableCell>{row.gainingUnit}</TableCell>
                <TableCell>{row.losingUnit}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </Table>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Device and User Details"
            className="modalContent"
            style={{
              overlay: { backgroundColor: "rgba(0,0,0,0.6)" },
              content: {
                display: "flex", // Added this
                flexDirection: "column", // Added this
                transition: "opacity 0.3s",
                width: "1600px",
                marginTop: "10em",
              },
            }}
          >
            <ModalContentWrapper>
              <ModalHeader>
                <ModalTitle>User History</ModalTitle>
                <CloseButton onClick={() => setIsModalOpen(false)}>
                  <CloseIcon />
                </CloseButton>
              </ModalHeader>
              <DataWrapper>
                <DataSection>
                  <SectionTitle>User Information</SectionTitle>
                  {selectedData && (
                    <>
                      <DataLabel>Name:</DataLabel>
                      <StyledInput
                        value={isEditable ? editData.name : selectedData.name}
                        readOnly={!isEditable}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                      />
                      <DataLabel>Rank:</DataLabel>
                      <StyledInput
                        value={isEditable ? editData.rank : selectedData.rank}
                        readOnly={!isEditable}
                        onChange={(e) =>
                          handleInputChange("rank", e.target.value)
                        }
                      />
                      <DataLabel>Current Duty Location:</DataLabel>
                      <StyledInput
                        value={
                          isEditable
                            ? editData.currentUnit
                            : selectedData.currentUnit
                        }
                        readOnly={!isEditable}
                        onChange={(e) =>
                          handleInputChange("currentUnit", e.target.value)
                        }
                      />
                      <DataLabel>Projected Unit:</DataLabel>
                      <StyledInput
                        value={
                          isEditable
                            ? editData.projectedUnit
                            : selectedData.projectedUnit
                        }
                        readOnly={!isEditable}
                        onChange={(e) =>
                          handleInputChange("projectedUnit", e.target.value)
                        }
                      />
                      <DataLabel>Email:</DataLabel>
                      <StyledInput
                        value={isEditable ? editData.email : selectedData.email}
                        readOnly={!isEditable}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                      />

                      <DataLabel>Phone Number:</DataLabel>
                      <StyledInput
                        value={
                          isEditable
                            ? editData.phoneNumber
                            : selectedData.phoneNumber
                        }
                        readOnly={!isEditable}
                        onChange={(e) =>
                          handleInputChange("phoneNumber", e.target.value)
                        }
                      />
                    </>
                  )}
                </DataSection>
                <DeviceHistory>
                  <SectionTitle>Duty Location History</SectionTitle>
                  <HistoryTable>
                    <thead>
                      <HistoryRow>
                        <HistoryHeader>Unit</HistoryHeader>
                        <HistoryHeader>Arrival Date</HistoryHeader>
                        <HistoryHeader>Departure Date</HistoryHeader>
                        <HistoryHeader>Reason</HistoryHeader>
                      </HistoryRow>
                    </thead>
                    <tbody>
                      {mockHistoryData.map((history, index) => (
                        <HistoryRow key={index}>
                          <HistoryCell>{history.unit}</HistoryCell>
                          <HistoryCell>{history.arrival}</HistoryCell>
                          <HistoryCell>{history.departure}</HistoryCell>
                          <HistoryCell>{history.reason}</HistoryCell>
                        </HistoryRow>
                      ))}
                    </tbody>
                  </HistoryTable>
                </DeviceHistory>
              </DataWrapper>
              <ButtonSection>
                <StyledButton
                  color={isEditable ? "white" : theme.colors.complementary1}
                  textColor={isEditable ? theme.colors.complementary1 : "white"}
                  border={isEditable ? theme.colors.complementary1 : "red"}
                  onClick={handleEditClick}
                >
                  {isEditable ? "Cancel" : "Edit"}
                </StyledButton>
                {isEditable && (
                  <StyledButton
                    color={theme.colors.complementary1}
                    onClick={handleSaveClick}
                    textColor="white"
                  >
                    Save
                  </StyledButton>
                )}
                <StyledButton
                  color={theme.colors.alert}
                  textColor="white"
                  onClick={handleDeleteClick}
                >
                  Delete
                </StyledButton>
              </ButtonSection>
            </ModalContentWrapper>
          </Modal>
        </SearchContainer>
      </SubContainer>
    </Container>
  );
}

export default RosterResults;
