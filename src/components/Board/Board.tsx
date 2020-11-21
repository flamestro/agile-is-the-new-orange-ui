import {Board} from "../../App/App.models";
import React, {useState} from "react";
import {LaneC} from "../Lane/Lane";
import styled from "styled-components";
import {Modal} from "../Modal/Modal";
import {LaneModalData} from "../Lane/LaneModal";
import {StyledButton} from "../StyledButton/StyledButton";
import {StyledHeadline} from "../StyledHeadline/StyledHeadline";
import {grey_1, orange_1} from "../Colors/Colors";
import {StyledDeleteButton} from "../StyledDeleteButton/StyledDeleteButton";
import {deleteBoard, deleteLane} from "../../App/App.gateways";
import {AreYouSureModal} from "../AreYouSureModal/AreYouSureModal";

export interface BoardProps {
    board: Board
}

const StyledBoard = styled.div`
    border: 2px solid black;    
    border-radius: 10px 10px 0 0;
    display: flex;
    flex-direction: row;
    justify-content: left;
    background-color: ${grey_1};
    min-height: 100px;
    overflow: auto;
    padding: 0 10px 0 10px;
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
    const [deleteModalActive, setDeleteModal] = useState(false)
    const [modalTriggered, toggleModal] = useState(false);
    const [isHovering, setHovered] = useState(false);
    const toggleIsHovering = () => {
        setHovered(!isHovering)
    }
    const toggleDeleteModal = () => {
        setDeleteModal(!deleteModalActive)
    }


    return (
        <BoardWrapper>
            <StyledHeadline onMouseEnter={toggleIsHovering} onMouseLeave={toggleIsHovering}>
                {board.name}
                {isHovering ?
                    <StyledDeleteButton onClick={() => {toggleDeleteModal()}}>
                        X
                    </StyledDeleteButton>
                    :
                    null}
            </StyledHeadline>
            <Modal childComp={<LaneModalData toggleModal={() => toggleModal(!modalTriggered)} boardId={board.id}/>}
                   modalTriggered={modalTriggered} toggleModal={() => toggleModal(!modalTriggered)}/>
            <StyledBoard>
                {board.lanes.map(lane => (
                    <LaneC key={lane.id} boardId={board.id} lane={lane}/>
                ))}
                <StyledButtonWrapper>
                    <StyledButton onClick={() => {
                        toggleModal(!modalTriggered)
                    }}>
                        + Lane
                    </StyledButton>
                </StyledButtonWrapper>
            </StyledBoard>
            <Modal toggleModal={() => {toggleDeleteModal()}}
                   modalTriggered={deleteModalActive}
                   childComp={
                       <AreYouSureModal toggleModal={() => {toggleDeleteModal()}}
                                        onAgree={() => {deleteBoard(board.id)}}/>}/>
        </BoardWrapper>
    );
}