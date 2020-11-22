import {Card} from "../../App/App.models";
import React, {useState} from "react";
import styled from "styled-components";
import {deleteCard} from "../../App/App.gateways";
import {StyledDeleteButton} from "../StyledDeleteButton/StyledDeleteButton";
import {Modal} from "../Modal/Modal";
import {AreYouSureModal} from "../AreYouSureModal/AreYouSureModal";
import {orange_1} from "../Colors/Colors";

export interface CardProps {
    card: Card;
    boardId: String;
    laneId: String;
}

const StyledCard = styled.div`
    border-radius: 26px;
    background: ${orange_1};
    box-shadow:  -5px -5px 10px #cf922d, 
                 5px 5px 10px #ffd643;
    max-width: 100%;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    white-space:pre-wrap;
`


export function CardC({card, boardId, laneId}: CardProps) {
    const [isHovering, setHovered] = useState(false);
    const [deleteModalActive, setDeleteModal] = useState(false)

    const toggleDeleteModal = () => {
        setDeleteModal(!deleteModalActive)
    }

    return (
        <StyledCard key={card.id} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <span>{card.name}</span>
            {isHovering ?
                <StyledDeleteButton onClick={() => {
                    toggleDeleteModal()
                }}>
                    X
                </StyledDeleteButton>
                :
                null}
            <Modal modalTriggered={deleteModalActive} childComp={<AreYouSureModal toggleModal={() => {
                toggleDeleteModal()
            }} onAgree={() => deleteCard(boardId, laneId, card.id)}/>}/>
        </StyledCard>
    );
}