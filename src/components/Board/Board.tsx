import {Board} from "../../App/App.models";
import React, {useState} from "react";
import {LaneC} from "../Lane/Lane";
import styled from "styled-components";
import {Modal} from "../Modal/Modal";
import {LaneModalData} from "../Lane/LaneModal";
import {StyledButton} from "../StyledButton/StyledButton";
import {StyledHeadline} from "../StyledHeadline/StyledHeadline";
import {grey_1, orange_1, orange_1_bright, orange_1_dark, orange_2, orange_3, orange_4, white} from "../Colors/Colors";
import {StyledDeleteButton} from "../StyledDeleteButton/StyledDeleteButton";
import {deleteBoard, deleteLane} from "../../App/App.gateways";
import {AreYouSureModal} from "../AreYouSureModal/AreYouSureModal";

export interface BoardProps {
    board: Board
}

const StyledBoard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    background-color: ${orange_1};
    border-radius: 26px;
    box-shadow: inset -5px -5px 10px #cf922d, 
                inset 5px 5px 10px #ffd643;
    min-height: 100px;
    overflow: auto;
    padding: 0 10px 0 10px;
`

const BoardWrapper = styled.div`
    border-radius: 50px;
    // background: linear-gradient(315deg, #ffc13c, #e6a232);
    box-shadow:  -9px -9px 18px #cf922d, 
                 9px 9px 18px #ffd643;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 30px 15px 30px 15px;
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

    const toggleDeleteModal = () => {
        setDeleteModal(!deleteModalActive)
    }


    return (
        <BoardWrapper>
            <StyledHeadline onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {board.name}
                {isHovering ?
                    <StyledDeleteButton onClick={() => {
                        toggleDeleteModal()
                    }}>
                        X
                    </StyledDeleteButton>
                    :
                    null}
            </StyledHeadline>
            <Modal childComp={<LaneModalData toggleModal={() => toggleModal(!modalTriggered)} boardId={board.id}/>}
                   modalTriggered={modalTriggered}/>
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
            <Modal modalTriggered={deleteModalActive}
                   childComp={
                       <AreYouSureModal toggleModal={() => {
                           toggleDeleteModal()
                       }}
                                        onAgree={() => {
                                            deleteBoard(board.id)
                                        }}/>}/>
        </BoardWrapper>
    );
}