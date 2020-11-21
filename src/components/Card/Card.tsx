import {Card} from "../../App/App.models";
import React, {useState} from "react";
import styled from "styled-components";
import {deleteCard} from "../../App/App.gateways";
import {StyledDeleteButton} from "../StyledDeleteButton/StyledDeleteButton";
import {Modal} from "../Modal/Modal";
import {AreYouSureModal} from "../AreYouSureModal/AreYouSureModal";

export interface CardProps {
    card: Card;
    boardId: String;
    laneId: String;
}

const StyledCard = styled.div`
    max-width: 100%;
    border-bottom: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    white-space:pre-wrap;
`


export function CardC({card, boardId, laneId}: CardProps) {
    const [isHovering, setHovered] = useState(false);
    const [deleteModalActive, setDeleteModal] = useState(false)
    const toggleIsHovering = () => {
        setHovered(!isHovering)
    }
    const toggleDeleteModal = () => {
        setDeleteModal(!deleteModalActive)
    }

    return (
        <StyledCard key={card.id} onMouseEnter={toggleIsHovering} onMouseLeave={toggleIsHovering}>
            <span>{card.name}</span>
            {isHovering ?
                <StyledDeleteButton onClick={() => {
                    toggleDeleteModal()
                }}>
                    X
                </StyledDeleteButton>
                :
                null}
            <Modal toggleModal={() => {
                toggleDeleteModal()
            }} modalTriggered={deleteModalActive} childComp={<AreYouSureModal toggleModal={() => {
                toggleDeleteModal()
            }} onAgree={() => deleteCard(boardId, laneId, card.id)}/>}/>
        </StyledCard>
    );
}