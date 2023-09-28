import React from 'react';
import mockData from '../mockData/mockData'
import styled from "@emotion/styled";

const ArrayDiv = styled.div`
  margin-top: 2rem;
  font-size: 24px;
  color: #284b63;
  text-decoration: bold;
`;


function GetTotalArray() {
    const totalReturnedItems = mockData.length;

    return (
        <ArrayDiv>
            Total number of Records: {totalReturnedItems}
        </ArrayDiv>
    );
}

export default GetTotalArray;
