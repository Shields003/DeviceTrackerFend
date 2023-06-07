// import React from "react";
// import styled from "@emotion/styled";

// const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 2rem;
// `;

// const PageButton = styled.button`
//   margin: 0 0.5rem;
//   padding: 0.5rem 1rem;
//   background-color: ${props => (props.active ? "#3f51b5" : "#ccc")};
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => (props.active ? "#2c3e50" : "#bbb")};
//   }
// `;

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const renderPageButtons = () => {
//     const buttons = [];

//     for (let page = 1; page <= totalPages; page++) {
//       buttons.push(
//         <PageButton
//           key={page}
//           active={page === currentPage}
//           onClick={() => onPageChange(page)}
//         >
//           {page}
//         </PageButton>
//       );
//     }

//     return buttons;
//   };

//   return (
//     <PaginationContainer>
//       {renderPageButtons()}
//     </PaginationContainer>
//   );
// };

// export default Pagination;
