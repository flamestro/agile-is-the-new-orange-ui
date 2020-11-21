import styled from "styled-components";

export const StyledDeleteButton = styled.div`
    font-weight: bold;    
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-left: 10px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    &:hover{
      cursor: pointer;
    }
`