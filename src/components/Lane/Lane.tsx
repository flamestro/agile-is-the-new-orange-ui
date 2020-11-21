import {Lane} from "../../App/App.models";
import React, {useState} from "react";
import {CardC} from "../Card/Card";
import styled from "styled-components";
import {Modal} from "../Modal/Modal";
import {CardDataModal} from "../Card/CardModal";
import {StyledButton} from "../StyledButton/StyledButton";
import {orange_2} from "../Colors/Colors";
import {StyledHeadline} from "../StyledHeadline/StyledHeadline";
import {StyledDeleteButton} from "../StyledDeleteButton/StyledDeleteButton";
import {deleteLane} from "../../App/App.gateways";
import {AreYouSureModal} from "../AreYouSureModal/AreYouSureModal";

export interface LaneProps {
    lane: Lane;
    boardId: String;
}

const StyledLane = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    background-color: ${orange_2};
`

const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export function LaneC({boardId, lane}: LaneProps) {
    const [modalTriggered, toggleModal] = useState(false);
    const [isHovering, setHovered] = useState(false);
    const [deleteModalActive, setDeleteModal] = useState(false)

    const toggleIsHovering = () => {
        setHovered(!isHovering)
    }
    const toggleDeleteModal = () => {
        setDeleteModal(!deleteModalActive)
    }

    return (
        <StyledLane>
            <StyledHeadline onMouseEnter={toggleIsHovering} onMouseLeave={toggleIsHovering}>
                {lane.name}
                {isHovering ?
                    <StyledDeleteButton onClick={() => toggleDeleteModal()}>
                        X
                    </StyledDeleteButton>
                    :
                    null}
            </StyledHeadline>
            <div>
                {lane.cards.map(card => (
                    <CardC key={card.id} boardId={boardId} laneId={lane.id} card={card}/>
                ))}
                <StyledButtonWrapper>
                    <StyledButton onClick={() => {
                        toggleModal(!modalTriggered)
                    }}> + Card</StyledButton>
                </StyledButtonWrapper>
            </div>
            <Modal childComp={<CardDataModal toggleModal={() => toggleModal(!modalTriggered)}
                                             boardId={boardId}
                                             laneId={lane.id}/>}
                   modalTriggered={modalTriggered}
                   toggleModal={() => toggleModal(!modalTriggered)}/>
            <Modal toggleModal={() => {toggleDeleteModal()}}
                   modalTriggered={deleteModalActive}
                   childComp={
                       <AreYouSureModal toggleModal={() => {toggleDeleteModal()}}
                                        onAgree={() => {deleteLane(boardId, lane.id)}}/>}/>
        </StyledLane>
    );
}