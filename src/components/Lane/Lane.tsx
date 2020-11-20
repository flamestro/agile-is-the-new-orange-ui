import {Lane} from "../../App/App.models";
import React, {useState} from "react";
import {CardC} from "../Card/Card";
import styled from "styled-components";
import {Modal} from "../Modal/Modal";
import {CardDataModal} from "../Card/CardModal";
import {StyledAddButton} from "../StyledAddButton/StyledAddButton";
import {orange_2} from "../Colors/Colors";
import {StyledHeadline} from "../StyledHeadline/StyledHeadline";


export interface LaneProps {
    lane: Lane;
    boardId: String;
}

const StyledLane = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    background-color: ${orange_2};
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
                <StyledAddButton onClick={() => {
                    toggleModal(!modalTriggered)
                }}> + Card</StyledAddButton>
            </div>
        </StyledLane>
    );
}