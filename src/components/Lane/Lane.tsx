import {Lane} from "../../App/App.models";
import React, {useState} from "react";
import {CardC} from "../Card/Card";
import styled from "styled-components";
import {Modal} from "../Modal/Modal";
import {CardDataModal} from "../Card/CardModal";
import {StyledButton} from "../StyledAddButton/StyledButton";
import {orange_2} from "../Colors/Colors";
import {StyledHeadline} from "../StyledHeadline/StyledHeadline";

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

    return (
        <StyledLane>
            <StyledHeadline>Lane: {lane.name}</StyledHeadline>
            <Modal childComp={<CardDataModal toggleModal={() => toggleModal(!modalTriggered)} boardId={boardId}
                                             laneId={lane.id}/>}
                   modalTriggered={modalTriggered} toggleModal={() => toggleModal(!modalTriggered)}/>
            <div>
                {lane.cards.map(card => (
                    <CardC key={card.id} card={card}/>
                ))}
                <StyledButtonWrapper>
                    <StyledButton onClick={() => {
                        toggleModal(!modalTriggered)
                    }}> + Card</StyledButton>
                </StyledButtonWrapper>
            </div>
        </StyledLane>
    );
}