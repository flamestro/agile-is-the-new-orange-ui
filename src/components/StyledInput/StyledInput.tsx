import styled from "styled-components";
import {grey_4} from "../Colors/Colors";
import React from "react";

const InputWithText = styled.input`
     position: relative;
     border-radius: 5px;
     height: 32px;
     font-weight: bold;
     text-align: center; 

`

const StyledFieldSet = styled.fieldset`
      border:none;
      position:relative;
      max-height: 32px;
`

const StyledInputLabel = styled.fieldset`
     position: absolute;
     border: none;
     top: 5px;
     left: 5px;
     right: 0;
     z-index: 1;
     pointer-events: none;
     height: 32px;
     font-weight: bold;
     text-align: left; 
     font-size: 12px;
     color: ${grey_4};
`

export interface InputProps {
    containedText: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    placeholderText: string,
    formName: string
}

export function StyledInput({containedText, onChange, placeholderText, formName}: InputProps) {
    return (

        <StyledFieldSet>
            <InputWithText placeholder={placeholderText} type="text" name={formName} value={containedText}
                           onChange={onChange} onKeyDown={(event) => {if (event.keyCode === 13) {event.preventDefault(); return false;}}}/>
            {containedText !== "" ? (<StyledInputLabel form={formName}>{placeholderText}</StyledInputLabel>) : null}
        </StyledFieldSet>
    )
}