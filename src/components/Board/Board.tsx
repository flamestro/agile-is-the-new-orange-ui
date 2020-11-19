import {Board} from "../../App/App.models";
import React, {useState} from "react";
import {LaneC, StyledAddButton} from "../Lane/Lane";
import styled from "styled-components";
import {createLane} from "../../App/App.gateways";
import {Modal} from "../Modal";

export interface BoardProps {
    board: Board
}

const StyledBoard = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: row;
`

export interface LaneModalProps {
    boardId: String,
    toggleModal: () => void,
}

function LaneModalData({boardId, toggleModal}: LaneModalProps) {
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

export const BoardC = ({board}: BoardProps) => {

    const [modalTriggered, toggleModal] = useState(false);

    return (
        <div>
            Board: {board.name}
            <Modal childComp={<LaneModalData toggleModal={() => toggleModal(!modalTriggered)} boardId={board.id}/>}
                   modalTriggered={modalTriggered} toggleModal={() => toggleModal(!modalTriggered)}/>
            <StyledBoard>
                {board.lanes.map(lane => (
                    <LaneC key={lane.id} boardId={board.id} lane={lane}/>
                ))}
                <button onClick={() => { toggleModal(!modalTriggered) }}>
                    add a lane to this board
                </button>
            </StyledBoard>

        </div>
    );
}