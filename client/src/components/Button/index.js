import styled from "styled-components";

const StyledButton = styled.button`
  color: #909090;
  background-color: transparent;
  font-weight: bold;
  outline: none;
  border: 0;
  cursor: pointer;
  font-size: 22px;
  transition: all 0.3s ease-in-out;
  margin: 0 15px;
  width: 25px;

  &:hover {
    color: #333333;
  }

  &:focus {
    outline: none;
  }
`;

export default StyledButton;
