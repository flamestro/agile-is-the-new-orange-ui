import {Lane} from "../../App/App.models";
import React, {useState} from "react";
import {CardC} from "../Card/Card";
import styled from "styled-components";
import {createCard} from "../../App/App.gateways";
import {Modal} from "../Modal";


export interface LaneProps {
    lane: Lane;
    boardId: String;
}

const StyledLane = styled.div`
    border: 1px solid black;
    padding: 10px;
`

export const StyledAddButton = styled.div`
    width: 100px;
    height: 20px;
    display: flex;
    justify-content: center;
    border: 3px solid grey;
`

export interface CardModalProps {
    boardId: String,
    laneId: String,
    toggleModal: () => void,
}
function CardDataModal({boardId, toggleModal,laneId}: CardModalProps) {
    const [cardName, setCardName] = useState("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCardName(e.currentTarget.value);
    }

    return (
        <React.Fragment>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={cardName} onChange={onChange}/>
                </label>
            </form>
            <StyledAddButton onClick={() => {
                createCard(boardId, laneId, cardName);
                toggleModal();
            }}> + </StyledAddButton>
        </React.Fragment>
    )
}

export function LaneC({boardId, lane}: LaneProps) {
    const [modalTriggered, toggleModal] = useState(false);

    return (
        <StyledLane>
            Lane: {lane.name}
            <Modal childComp={<CardDataModal toggleModal={() => toggleModal(!modalTriggered)} boardId={boardId} laneId={lane.id}/>}
                   modalTriggered={modalTriggered} toggleModal={() => toggleModal(!modalTriggered)}/>
            <div>
                {lane.cards.map(card => (
                    <CardC key={card.id}  card={card}/>
                ))}
                <StyledAddButton onClick={() => {
                    toggleModal(!modalTriggered)
                }}> + </StyledAddButton>
            </div>
        </StyledLane>
    );
}