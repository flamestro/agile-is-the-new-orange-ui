import styled from "styled-components";

const StyledDeleteButton = styled.div`
  font-weight: bold;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  font-size: 10px;
  margin-left: 10px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  position: relative;
  ::after {
    content: "X";
  }
  &:hover {
    cursor: pointer;
  }
`;

export default StyledDeleteButton;
