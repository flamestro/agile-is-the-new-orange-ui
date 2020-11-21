import React, {useState} from "react";
import {StyledButton} from "../StyledButton/StyledButton";
import {createBoard} from "../../App/App.gateways";
import {StyledInput} from "../StyledInput/StyledInput";

export interface BoardModalProps {
    userId: String
    toggleModal: () => void,
}
export function BoardData({userId, toggleModal}: BoardModalProps) {
    const [boardName, setBoardName] = useState("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setBoardName(e.currentTarget.value);
    }

    return (
        <React.Fragment>
            <form>
                <label>
                    <StyledInput containedText={boardName} onChange={onChange} placeholderText={"Board Name"} formName={"BoardName"}/>
                </label>
            </form>
            <StyledButton onClick={() => {
                createBoard(userId, boardName);
                toggleModal();
            }}> + </StyledButton>
            <StyledButton onClick={() => {
                toggleModal();
            }}> Close</StyledButton>
        </React.Fragment>
    )
}