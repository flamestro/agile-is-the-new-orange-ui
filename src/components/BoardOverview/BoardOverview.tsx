import React, {useEffect, useState} from 'react';
import {Board} from "../../App/App.models";
import {BoardC} from "../Board/Board";
import styled from "styled-components";
import {fetchBoard} from "../../App/App.gateways";

export const initialBoards: Board[] = [];

export interface BoardOverviewProps {
    userId: String
}

const StyledOverview = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
`

export function BoardOverview({userId}: BoardOverviewProps) {
    const [boards, setBoards] = useState(initialBoards);
    const [reloadSwitch, toggleSwitch] = useState(false)

    useEffect(() => {
        fetchBoard(userId).then((response) => {
            if (response.boards) {
                setBoards([...response.boards])
            }
        })
        setTimeout(() => {  toggleSwitch(!reloadSwitch) }, 1000); // re-trigger effect every second
    }, [userId, reloadSwitch])

    return (
        <StyledOverview>
            Boards:
            {boards.map(board => <BoardC key={board.id} board={board}/>)}
        </StyledOverview>
    );
}