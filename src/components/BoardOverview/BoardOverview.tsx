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

    useEffect(() => {
        fetchBoard(userId).then((response) => {
            console.log("fetching boards for user " + userId)
            if (response.boards) {
                setBoards([...response.boards])
            }
        })
    }, [userId])

    return (
        <StyledOverview>
            Boards:
            {boards.map(board => <BoardC key={board.id} board={board}/>)}
        </StyledOverview>
    );
}