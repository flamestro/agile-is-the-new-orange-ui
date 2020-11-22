import React, { useState } from "react";
import { createCard } from "../../App/App.gateways";
import StyledButton from "../StyledButton/StyledButton";
import { StyledInput } from "../StyledInput/StyledInput";

export interface CardModalProps {
  boardId: string;
  laneId: string;
  toggleModal: () => void;
}

export const CardDataModal = ({
  boardId,
  toggleModal,
  laneId,
}: CardModalProps) => {
  const [cardName, setCardName] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCardName(e.currentTarget.value);
  };

  return (
    <>
      <form>
        <StyledInput
          containedText={cardName}
          onChange={onChange}
          placeholderText="Card Name"
          formName="CardName"
          id="CardData"
        />
      </form>
      <StyledButton
        onClick={() => {
          createCard(boardId, laneId, cardName).then((res) => {
            if (res.status === "INVALID_NAME") {
              alert("This card name is invalid, try again");
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
};
