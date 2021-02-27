import styled from "styled-components";

const StyledEditButton = styled.div`
  font-weight: bold;
  border-radius: 25%;
  width: 20px;
  height: 14px;
  font-size: 10px;
  margin-left: 10px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  ::after {
    content: "Edit";
  }
  &:hover {
    cursor: pointer;
  }
`;

export default StyledEditButton;
