import React, {useState} from "react";
import {StyledAddButton} from "../StyledAddButton/StyledAddButton";
import {createLane} from "../../App/App.gateways";
import {StyledInput} from "../StyledInput/StyledInput";

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
                <StyledInput containedText={laneName} onChange={onChange} placeholderText={"Lane Name"} formName={"LaneName"}/>
            </form>
            <StyledAddButton onClick={() => {
                createLane(boardId, laneName);
                toggleModal();
            }}> + </StyledAddButton>
            <StyledAddButton onClick={() => {
                toggleModal();
            }}> Close</StyledAddButton>
        </React.Fragment>
    )
}