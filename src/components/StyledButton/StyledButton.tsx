import styled from "styled-components";
import {black, grey_2, white} from "../Colors/Colors";

export const StyledButton = styled.div`
    width: 100px;
    height: 20px;
    display: flex;
    justify-content: center;
    background-color: ${white};
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