import styled from "styled-components";

export const StyledDeleteButton = styled.div`
    font-weight: bold;    
    border-radius: 50%;
    width: 15px;
    height: 15px;
    font-size: 10px;
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