import React, {useState} from "react";
import {createCard} from "../../App/App.gateways";
import {StyledAddButton} from "../StyledAddButton/StyledAddButton";

export interface CardModalProps {
    boardId: String,
    laneId: String,
    toggleModal: () => void,
}

export function CardDataModal({boardId, toggleModal,laneId}: CardModalProps) {
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
