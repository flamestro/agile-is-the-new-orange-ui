import React, { useState } from "react";
import StyledButton from "../StyledButton/StyledButton";
import { createLane } from "../../App/App.gateways";
import { StyledInput } from "../StyledInput/StyledInput";

export interface LaneModalProps {
  boardId: string;
  toggleModal: () => void;
}

export const LaneModalData = ({ boardId, toggleModal }: LaneModalProps) => {
  const [laneName, setLaneName] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLaneName(e.currentTarget.value);
  };

  return (
    <>
      <form>
        <StyledInput
          containedText={laneName}
          onChange={onChange}
          placeholderText="Lane Name"
          formName="LaneName"
          id="LaneData"
        />
      </form>
      <StyledButton
        onClick={() => {
          createLane(boardId, laneName).then((res) => {
            if (res.status === "INVALID_NAME") {
              alert("This lane name is invalid, try again");
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
