import React, { useState } from "react";
import { StyledButton } from "../StyledButton/StyledButton";
import { createBoard } from "../../App/App.gateways";
import { StyledInput } from "../StyledInput/StyledInput";

export interface BoardModalProps {
  userId: string;
  toggleModal: () => void;
}
export function BoardData({ userId, toggleModal }: BoardModalProps) {
  const [boardName, setBoardName] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setBoardName(e.currentTarget.value);
  };

  return (
    <>
      <form>
        <label htmlFor="BoardData">
          <StyledInput
            containedText={boardName}
            onChange={onChange}
            placeholderText="Board Name"
            formName="BoardName"
            id="BoardData"
          />
        </label>
      </form>
      <StyledButton
        onClick={() => {
          createBoard(userId, boardName).then((res) => {
            if (res.status === "INVALID_NAME") {
              alert("This board name is invalid, try again");
            } else {
              toggleModal();
            }
          });
        }}
      >
        {" "}
        +
      </StyledButton>
      <StyledButton
        onClick={() => {
          toggleModal();
        }}
      >
        {" "}
        Close
      </StyledButton>
    </>
  );
}
