import React, {useState} from "react";
import {StyledAddButton} from "../StyledAddButton/StyledAddButton";
import {createBoard} from "../../App/App.gateways";
import {StyledInput} from "../StyledInput/StyledInput";

export interface BoardModalProps {
    userId: String
    toggleModal: () => void,
}
export function BoardData({userId, toggleModal}: BoardModalProps) {
    const [boardName, setBoardname] = useState("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setBoardname(e.currentTarget.value);
    }

    return (
        <React.Fragment>
            <form>
                <label>
                    <StyledInput containedText={boardName} onChange={onChange} placeholderText={"Board Name"} formName={"BoardName"}/>
                </label>
            </form>
            <StyledAddButton onClick={() => {
                createBoard(userId, boardName);
                toggleModal();
            }}> + </StyledAddButton>
            <StyledAddButton onClick={() => {
                toggleModal();
            }}> Close</StyledAddButton>
        </React.Fragment>
    )
}