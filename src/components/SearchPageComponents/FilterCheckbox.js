import React from "react";
import styled from "@emotion/styled";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin: 0.5rem 0;
  font-size: 1.2rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
  margin-left: 1.5rem;
  width: 20px;
  height: 20px;
  margin-top: 1px;
`;


const FilterCheckbox = ({ label, isChecked, handleCheckboxChange }) => {
  return (
    <CheckboxContainer>
      <Checkbox
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label}
    </CheckboxContainer>
  );
};

export default FilterCheckbox;
