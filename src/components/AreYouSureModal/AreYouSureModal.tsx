import React from "react";
import { StyledButton } from "../StyledButton/StyledButton";
import StyledHeadline from "../StyledHeadline/StyledHeadline";

export interface AreYouSureModalProps {
  toggleModal: () => void;
  onAgree: () => void;
}

export function AreYouSureModal({
  toggleModal,
  onAgree,
}: AreYouSureModalProps) {
  return (
    <>
      <StyledHeadline>Are you sure?</StyledHeadline>
      <StyledButton
        onClick={() => {
          onAgree();
        }}
      >
        Yes
      </StyledButton>
      <StyledButton
        onClick={() => {
          toggleModal();
        }}
      >
        No
      </StyledButton>
    </>
  );
}
