import React, {useEffect, useState} from 'react';
import {Board} from "../../App/App.models";
import {BoardC} from "../Board/Board";
import styled from "styled-components";
import {createBoard, fetchBoard} from "../../App/App.gateways";
import {StyledAddButton} from "../Lane/Lane";
import {Modal} from "../Modal";

export const initialBoards: Board[] = [];

export interface BoardOverviewProps {
    userId: String
}

export interface BoardModalProps {
    userId: String
    toggleModal: () => void,
}

const StyledOverview = styled.div`
position: relative;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    min-height: 150px;
`

function BoardData({userId, toggleModal}: BoardModalProps) {
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
            Boards:
            {boards.map(board => <BoardC key={board.id} board={board}/>)}
            <StyledAddButton onClick={() => {
                toggleModal(!modalTriggered)
            }}> + Board </StyledAddButton>
        </StyledOverview>
    );
}