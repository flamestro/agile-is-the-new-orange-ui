import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Board } from "../../App/App.models";
import { BoardC } from "../Board/Board";
import { fetchBoard } from "../../App/App.gateways";
import { Modal } from "../Modal/Modal";
import StyledButton from "../StyledButton/StyledButton";
import { BoardData } from "../Board/BoardModal";
import StyledHeadline from "../StyledHeadline/StyledHeadline";

export const initialBoards: Board[] = [];

export interface BoardOverviewProps {
  userId: string;
}

const StyledOverview = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 150px;
`;
export const BoardButtonWrapper = styled.span`
  display: flex;
  justify-content: center;
`;

export const BoardOverview = ({ userId }: BoardOverviewProps) => {
  const [boards, setBoards] = useState(initialBoards);
  const [modalTriggered, toggleModal] = useState(false);
  const [reloadSwitch, toggleSwitch] = useState(false);

  useEffect(() => {
    fetchBoard(userId).then((response) => {
      if (response.boards) {
        setBoards([...response.boards]);
      }
    });
    setTimeout(() => {
      toggleSwitch(!reloadSwitch);
    }, 250); // re-trigger effect every second
  }, [userId, reloadSwitch]);

  return (
    <StyledOverview>
      <Modal
        childComp={
          <BoardData
            toggleModal={() => toggleModal(!modalTriggered)}
            userId={userId}
          />
        }
        modalTriggered={modalTriggered}
      />
      <StyledHeadline>
        Boards of
        {` ${userId}`}
      </StyledHeadline>
      {boards.map((board) => (
        <BoardC key={board.id} board={board} />
      ))}
      <BoardButtonWrapper>
        <StyledButton
          onClick={() => {
            toggleModal(!modalTriggered);
          }}
        >
          + Board
        </StyledButton>
      </BoardButtonWrapper>
    </StyledOverview>
  );
};
