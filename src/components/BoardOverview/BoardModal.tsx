import React, {useState} from "react";
import {StyledAddButton} from "../StyledAddButton/StyledAddButton";
import {createBoard} from "../../App/App.gateways";

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
                    Name:
                    <input type="text" name="name" value={boardName} onChange={onChange}/>
                </label>
            </form>
            <StyledAddButton onClick={() => {
                createBoard(userId, boardName);
                toggleModal();
            }}> + </StyledAddButton>
        </React.Fragment>
    )
}