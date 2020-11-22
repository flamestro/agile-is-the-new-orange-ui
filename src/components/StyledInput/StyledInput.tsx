import styled from "styled-components";
import React from "react";
import { orange1, white } from "../Colors/Colors";

const InputWithText = styled.input`
  position: relative;
  height: 32px;
  font-weight: bold;
  text-align: center;
  border-radius: 26px;
  border: 0 solid ${orange1};
  background: ${orange1};
  box-shadow: -6px -6px 12px #cf922d, 6px 6px 12px #ffd643;
  ::placeholder {
    color: ${white};
  }
`;

const StyledFieldSet = styled.fieldset`
  border: none;
  position: relative;
  max-height: 32px;
`;

const StyledInputLabel = styled.fieldset`
  color: ${white};
  position: absolute;
  border: none;
  top: 3px;
  left: 15px;
  right: 0;
  z-index: 1;
  pointer-events: none;
  height: 32px;
  font-weight: bold;
  text-align: left;
  font-size: 12px;
  border-radius: 26px;
`;

export interface InputProps {
  containedText: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholderText: string;
  formName: string;
  id: string;
}

export const StyledInput = ({
  containedText,
  onChange,
  placeholderText,
  formName,
  id,
}: InputProps) => {
  return (
    <StyledFieldSet>
      <InputWithText
        placeholder={placeholderText}
        id={id}
        type="text"
        name={formName}
        value={containedText}
        onChange={onChange}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            event.preventDefault();
          }
          return false;
        }}
      />
      {containedText !== "" ? (
        <StyledInputLabel form={formName}>{placeholderText}</StyledInputLabel>
      ) : null}
    </StyledFieldSet>
  );
};
