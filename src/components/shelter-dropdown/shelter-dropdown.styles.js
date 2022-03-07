import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

export const StyledSelect = styled.select`
  max-width: 100%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 18px;
  font-family: 'Nunito';
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
  font-family: 'Nunito';
  font-size: 18px;
`;


