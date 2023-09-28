import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import searchResults from "../../../styles/searchResults.css";
import mockData from "../mockData/mockData.js";
import Modal from "react-modal";
import ModalStyles from "../../../styles/ModalStyles.css";
import StyledButton from "../../buttons/styledButton";
import ConfirmModal from "./confirmModal";
import CloseIcon from '@mui/icons-material/Close';

//Styled components
const theme = {
  colors: {
    primary: "#284b63", // primary color (blue)
    complementary1: "#3c6e71", // complementary color 1 (dark blue/green)
    complementary2: "#d9d9d9", // complementary color 2 (gray)
    accent: "#1985a1", // accent color (blue/green)
    accent2: "#fca311", // accent color 2 (orange)
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
`;

const Pagination = styled.div`
  padding-right: 8px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  color: white;
  background-color: #284b63;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 4px;
  &:hover {
    background-color: ${theme.colors.accent2};
  }
`;

const Table = styled.table`
  border: 3px solid ${theme.colors.primary};
  width: 85vw;
  max-width: 85vw;
  max-height: 60vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const TableHeader = styled.th`
  color: ${theme.colors.text};
  padding: 1em;
  background-color: ${theme.colors.primary};
  height: 30px;
`;

const TableCell = styled.td`
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
`;

const TableRow = styled.tr`
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
`;

const ModalHeader = styled.div`
  position: relative; // This is important
  display: flex;
  justify-content: center; // To center the title
  align-items: center; // Vertical alignment
  border-bottom: 1px solid ${theme.colors.complementary2};
  padding: 5px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: ${theme.colors.primary};
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
`;

const mockHistoryData = [
  {
    user: "Billy Bob Thorton",
    email: "BBT_manbearpig@aol.com",
    issued: "2022-05-10",
    returned: "",
  },
  {
    user: "Jack Bower",
    email: "SaveDaWorld@cia.gov",
    issued: "2020-11-22",
    returned: "2021-12-01",
  },
  {
    user: "Vlad Putin",
    email: "Vladdyvlad@notspy.ru",
    issued: "2019-11-1",
    returned: "2020-02-01",
  },
];

Modal.setAppElement("#root");

function SearchResults({ allData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(20);
  const [currentData, setCurrentData] = useState([]);
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
    const isConfirmed = window.confirm("Are you sure you want to delete? This change cannot be undone.");
    
    if (isConfirmed) {
        // Call your delete function/logic here.
    }
};


  useEffect(() => {
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    setCurrentData(mockData.slice(indexOfFirstRow, indexOfLastRow));
  }, [allData, currentPage]);

  return (
    <Container>
      <SearchContainer>
        <Table>
          <TableRow>
            <TableHeader>User</TableHeader>
            <TableHeader>Device</TableHeader>
            <TableHeader>Device status</TableHeader>
            <TableHeader>Last Online</TableHeader>
            <TableHeader>Last Location</TableHeader>
            <TableHeader>Unit</TableHeader>
            <TableHeader>Phone Number</TableHeader>
            <TableHeader>Email</TableHeader>
          </TableRow>
          {currentData.map((row, index) => (
            <TableRow key={index} onClick={() => handleRowClick(row)}>
              <TableCell>{row.user}</TableCell>
              <TableCell>{row.device}</TableCell>
              <TableCell>{row.deviceStatus}</TableCell>
              <TableCell>{row.lastOnline}</TableCell>
              <TableCell>{row.lastLocationLat + row.lastLocationLon}</TableCell>
              <TableCell>{row.unit}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
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
              <ModalTitle>Device and User Details</ModalTitle>
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <CloseIcon />
              </CloseButton>
            </ModalHeader>
            <DataWrapper>
              <DataSection>
                <SectionTitle>Current Device User</SectionTitle>
                {selectedData && (
                  <>
                    <DataLabel>Device ID:</DataLabel>
                    <StyledInput
                      value={isEditable ? editData.device : selectedData.device}
                      readOnly={!isEditable}
                      onChange={(e) =>
                        handleInputChange("device", e.target.value)
                      }
                    />
                    <DataLabel>User:</DataLabel>
                    <StyledInput
                      value={isEditable ? editData.user : selectedData.user}
                      readOnly={!isEditable}
                      onChange={(e) =>
                        handleInputChange("user", e.target.value)
                      }
                    />
                    <DataLabel>Device:</DataLabel>
                    <StyledInput
                      value={isEditable ? editData.device : selectedData.device}
                      readOnly={!isEditable}
                      onChange={(e) =>
                        handleInputChange("device", e.target.value)
                      }
                    />
                    <DataLabel>Device Status:</DataLabel>
                    <StyledInput
                      value={
                        isEditable
                          ? editData.deviceStatus
                          : selectedData.deviceStatus
                      }
                      readOnly={!isEditable}
                      onChange={(e) =>
                        handleInputChange("deviceStatus", e.target.value)
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
                      value={isEditable ? editData.email : selectedData.email}
                      readOnly={!isEditable}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                    <DataLabel>Unit:</DataLabel>
                    <StyledInput
                      value={isEditable ? editData.email : selectedData.email}
                      readOnly={!isEditable}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                    <DataLabel>Last Online</DataLabel>
                    <StyledInputAlt
                      value={selectedData.email}
                      readOnly={!isEditable}
                    />
                    <DataLabel>Last Location</DataLabel>
                    <StyledInputAlt
                      value={selectedData.lastLocationLat}
                      readOnly={!isEditable}
                    />
                  </>
                )}
              </DataSection>
              <DeviceHistory>
                <SectionTitle>Device History</SectionTitle>
                <HistoryTable>
                  <thead>
                    <HistoryRow>
                      <HistoryHeader>User Name</HistoryHeader>
                      <HistoryHeader>Email</HistoryHeader>
                      <HistoryHeader>Issued</HistoryHeader>
                      <HistoryHeader>Returned</HistoryHeader>
                    </HistoryRow>
                  </thead>
                  <tbody>
                    {mockHistoryData.map((history, index) => (
                      <HistoryRow key={index}>
                        <HistoryCell>{history.user}</HistoryCell>
                        <HistoryCell>{history.email}</HistoryCell>
                        <HistoryCell>{history.issued}</HistoryCell>
                        <HistoryCell>{history.returned}</HistoryCell>
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

              <StyledButton color={theme.colors.alert} textColor="white" onClick={handleDeleteClick}>
                Delete
              </StyledButton>
            </ButtonSection>
          </ModalContentWrapper>
        </Modal>
        <Pagination>
          {Array(Math.ceil(mockData.length / rowsPerPage))
            .fill()
            .map((_, idx) => (
              <PaginationButton
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
              >
                {idx + 1}
              </PaginationButton>
            ))}
        </Pagination>
      </SearchContainer>
    </Container>
  );
}

export default SearchResults;
