import React, {useState} from "react";
import {createCard} from "../../App/App.gateways";
import {StyledButton} from "../StyledAddButton/StyledButton";
import {StyledInput} from "../StyledInput/StyledInput";

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
                <StyledInput containedText={cardName} onChange={onChange} placeholderText={"Card Name"} formName={"CardName"}/>
            </form>
            <StyledButton onClick={() => {
                if(cardName !== ""){
                    createCard(boardId, laneId, cardName);
                    toggleModal();
                } else {
                  alert("enter a name")
                }
            }}> + </StyledButton>
            <StyledButton onClick={() => {
                toggleModal();
            }}> Close</StyledButton>
        </React.Fragment>
    )
}
