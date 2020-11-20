import React, {useEffect, useState} from 'react';
import {Board} from "../../App/App.models";
import {BoardC} from "../Board/Board";
import styled from "styled-components";
import {fetchBoard} from "../../App/App.gateways";
import {Modal} from "../Modal/Modal";
import {StyledAddButton} from "../StyledAddButton/StyledAddButton";
import {BoardData} from "./BoardModal";
import {StyledHeadline} from "../StyledHeadline/StyledHeadline";

export const initialBoards: Board[] = [];

export interface BoardOverviewProps {
    userId: String
}

const StyledOverview = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    min-height: 150px;
`
export const BoardButtonWrapper = styled.span`
    display: flex;
    justify-content: center;
`

export function BoardOverview({userId}: BoardOverviewProps) {
    const [boards, setBoards] = useState(initialBoards);
    const [modalTriggered, toggleModal] = useState(false);
    const [reloadSwitch, toggleSwitch] = useState(false)

    useEffect(() => {
        fetchBoard(userId).then((response) => {
            if (response.boards) {
                setBoards([...response.boards])
            }
        })
        setTimeout(() => {
            toggleSwitch(!reloadSwitch)
        }, 250); // re-trigger effect every second
    }, [userId, reloadSwitch])

    return (
        <StyledOverview>
            <Modal childComp={<BoardData toggleModal={() => toggleModal(!modalTriggered)} userId={userId}/>}
                   modalTriggered={modalTriggered} toggleModal={() => toggleModal(!modalTriggered)}/>
            <StyledHeadline>Boards of {userId}</StyledHeadline>
            {boards.map(board => <BoardC key={board.id} board={board}/>)}
            <BoardButtonWrapper>
                <StyledAddButton onClick={() => { toggleModal(!modalTriggered)}}>
                    + Board
                </StyledAddButton>
            </BoardButtonWrapper>
        </StyledOverview>
    );
}