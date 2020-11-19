import React, {useState} from "react";
import {StyledAddButton} from "../StyledAddButton/StyledAddButton";
import {createLane} from "../../App/App.gateways";

export interface LaneModalProps {
    boardId: String,
    toggleModal: () => void,
}

export function LaneModalData({boardId, toggleModal}: LaneModalProps) {
    const [laneName, setLaneName] = useState("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLaneName(e.currentTarget.value);
    }

    return (
        <React.Fragment>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={laneName} onChange={onChange}/>
                </label>
            </form>
            <StyledAddButton onClick={() => {
                createLane(boardId, laneName);
                toggleModal();
            }}> + </StyledAddButton>
        </React.Fragment>
    )
}