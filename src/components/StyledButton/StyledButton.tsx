import styled from "styled-components";
import {black, grey_2, orange_1, orange_1_bright, orange_1_dark, white} from "../Colors/Colors";

export const StyledButton = styled.div`
    width: 100px;
    height: 20px;
    display: flex;
    justify-content: center;
border-radius: 26px;
background: ${orange_1};
box-shadow:  -5px -5px 10px #cf922d, 
             5px 5px 10px #ffd643;
    user-select: none;
    margin: 10px;
    padding: 10px;
    &:hover{
      background-color: ${orange_1_bright};
      cursor: pointer;
    }
`