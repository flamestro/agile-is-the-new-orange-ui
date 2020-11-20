import {Board} from "../../App/App.models";
import React, {useState} from "react";
import {LaneC} from "../Lane/Lane";
import styled from "styled-components";
import {Modal} from "../Modal/Modal";
import {LaneModalData} from "../Lane/LaneModal";
import {StyledAddButton} from "../StyledAddButton/StyledAddButton";
import {StyledHeadline} from "../StyledHeadline/StyledHeadline";
import {grey, orange_1, white} from "../Colors/Colors";

export interface BoardProps {
    board: Board
}

const StyledBoard = styled.div`
    border: 2px solid black;    
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${grey};
    min-height: 100px;
`

const BoardWrapper = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px 0 10px 0;
    background-color: ${orange_1};
`

const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const BoardC = ({board}: BoardProps) => {

    const [modalTriggered, toggleModal] = useState(false);

    return (
        <BoardWrapper>
            <StyledHeadline>Board: {board.name}</StyledHeadline>
            <Modal childComp={<LaneModalData toggleModal={() => toggleModal(!modalTriggered)} boardId={board.id}/>}
                   modalTriggered={modalTriggered} toggleModal={() => toggleModal(!modalTriggered)}/>
            <StyledBoard>
                {board.lanes.map(lane => (
                    <LaneC key={lane.id} boardId={board.id} lane={lane}/>
                ))}
                <StyledButtonWrapper>
                    <StyledAddButton onClick={() => { toggleModal(!modalTriggered) }}>
                        + Lane
                    </StyledAddButton>
                </StyledButtonWrapper>
            </StyledBoard>

        </BoardWrapper>
    );
}