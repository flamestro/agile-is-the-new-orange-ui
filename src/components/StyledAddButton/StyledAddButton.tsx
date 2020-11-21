import styled from "styled-components";
import {black, grey_2} from "../Colors/Colors";

export const StyledAddButton = styled.div`
    width: 100px;
    height: 20px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    color: ${black};
    border: 2px solid ${black};
    user-select: none;
    margin: 10px;
    &:hover{
      background-color: ${grey_2};
      cursor: pointer;
    }
`