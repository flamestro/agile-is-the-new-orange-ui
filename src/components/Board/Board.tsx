import {Board} from "../../App/App.models";
import React, {useState} from "react";
import {LaneC} from "../Lane/Lane";
import styled from "styled-components";
import {Modal} from "../Modal/Modal";
import {LaneModalData} from "../Lane/LaneModal";

export interface BoardProps {
    board: Board
}

const StyledBoard = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: row;
`

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