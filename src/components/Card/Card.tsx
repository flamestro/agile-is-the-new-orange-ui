import React, { useState } from "react";
import styled from "styled-components";
import { DragSourceMonitor, useDrag, useDrop } from "react-dnd";
import { Card } from "../../App/App.models";
import { deleteCard, moveCard } from "../../App/App.gateways";
import StyledDeleteButton from "../StyledDeleteButton/StyledDeleteButton";
import { Modal } from "../Modal/Modal";
import { AreYouSureModal } from "../AreYouSureModal/AreYouSureModal";
import { orange1 } from "../Colors/Colors";
import ItemTypes from "../../App/App.dragtypes";

export interface CardProps {
  card: Card;
  boardId: string;
  laneId: string;
}

const StyledCard = styled.div`
  border-radius: 26px;
  background: ${orange1};
  box-shadow: -5px -5px 10px #cf922d, 5px 5px 10px #ffd643;
  max-width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
`;

const CardContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  white-space: pre-wrap;
`;

interface TargetCard {
  targetCardId: string;
  targetLaneId: string;
  targetBoardId: string;
}
export const CardC = ({ card, boardId, laneId }: CardProps) => {
  const [isHovering, setHovered] = useState(false);
  const [deleteModalActive, setDeleteModal] = useState(false);
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (draggedItem, monitor) => {
      const dropResult: TargetCard = monitor.getDropResult();
      if (draggedItem && dropResult) {
        console.log(dropResult.targetBoardId);
        moveCard(
          card.id,
          laneId,
          boardId,
          dropResult.targetCardId,
          dropResult.targetLaneId,
          dropResult.targetBoardId
        );
      }
    },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({
      targetCardId: card.id,
      targetLaneId: laneId,
      targetBoardId: boardId,
    }),
    collect: (monitor) => ({}),
  });
  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModalActive);
  };

  return (
    <StyledCard
      key={card.id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={drop}
    >
      <CardContentWrapper ref={drag}>
        <span>{card.name}</span>
        {isHovering ? (
          <StyledDeleteButton
            onClick={() => {
              toggleDeleteModal();
            }}
          >
            X
          </StyledDeleteButton>
        ) : null}
      </CardContentWrapper>
      <Modal
        modalTriggered={deleteModalActive}
        childComp={
          <AreYouSureModal
            toggleModal={() => {
              toggleDeleteModal();
            }}
            onAgree={() => deleteCard(boardId, laneId, card.id)}
          />
        }
      />
    </StyledCard>
  );
};
