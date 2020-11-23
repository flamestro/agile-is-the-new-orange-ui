import React, { useState } from "react";
import styled from "styled-components";
import { useDrag, useDrop } from "react-dnd";
import { Lane } from "../../App/App.models";
import { CardC } from "../Card/Card";
import { Modal } from "../Modal/Modal";
import { CardDataModal } from "../Card/CardModal";
import StyledButton from "../StyledButton/StyledButton";
import { orange1 } from "../Colors/Colors";
import StyledHeadline from "../StyledHeadline/StyledHeadline";
import StyledDeleteButton from "../StyledDeleteButton/StyledDeleteButton";
import { deleteLane } from "../../App/App.gateways";
import { AreYouSureModal } from "../AreYouSureModal/AreYouSureModal";
import ItemTypes from "../../App/App.dragtypes";

export interface LaneProps {
  lane: Lane;
  boardId: string;
}

const StyledLane = styled.div`
  border-radius: 26px;
  box-shadow: -5px -5px 10px #cf922d, 5px 5px 10px #ffd643;
  padding: 20px;
  margin: 20px;
  background-color: ${orange1};
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LaneC = ({ boardId, lane }: LaneProps) => {
  const [modalTriggered, toggleModal] = useState(false);
  const [isHovering, setHovered] = useState(false);
  const [deleteModalActive, setDeleteModal] = useState(false);
  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModalActive);
  };

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({
      targetCardId: "",
      targetLaneId: lane.id,
      targetBoardId: boardId,
    }),
    collect: (monitor) => ({}),
  });

  return (
    <StyledLane ref={drop}>
      <StyledHeadline
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {lane.name}
        {isHovering ? (
          <StyledDeleteButton onClick={() => toggleDeleteModal()}>
            X
          </StyledDeleteButton>
        ) : null}
      </StyledHeadline>
      <div>
        {lane.cards.map((card) => (
          <CardC key={card.id} boardId={boardId} laneId={lane.id} card={card} />
        ))}
        <StyledButtonWrapper>
          <StyledButton
            onClick={() => {
              toggleModal(!modalTriggered);
            }}
          >
            {" "}
            + Card
          </StyledButton>
        </StyledButtonWrapper>
      </div>
      <Modal
        childComp={
          <CardDataModal
            toggleModal={() => toggleModal(!modalTriggered)}
            boardId={boardId}
            laneId={lane.id}
          />
        }
        modalTriggered={modalTriggered}
      />
      <Modal
        modalTriggered={deleteModalActive}
        childComp={
          <AreYouSureModal
            toggleModal={() => {
              toggleDeleteModal();
            }}
            onAgree={() => {
              deleteLane(boardId, lane.id);
            }}
          />
        }
      />
    </StyledLane>
  );
};
