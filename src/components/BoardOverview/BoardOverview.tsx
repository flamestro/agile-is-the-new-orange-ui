import React, {useEffect, useState} from 'react';
import {Board} from "../../App/App.models";
import {fetchBoard} from "../../App/App.gateways";
import {BoardC} from "../Board/Board";

export interface BoardOverviewProps {
    boardIds: String[]
}
export const initialBoards: Board[] = [];

export function BoardOverview({boardIds}: BoardOverviewProps) {
    const [boards, setBoards] = useState(initialBoards);

    function myFunction(boardId: String) {
        fetchBoard(boardId).then((response) => {
            let copyBoards = Object.assign([], boards);
            if (response.board) {
                copyBoards.push(response.board)
            }
            setBoards(copyBoards)
        })
    }

    useEffect(() => {
        boardIds.forEach(myFunction)
    })

    return (
        <React.Fragment>
            Boards:
            {boards.map(board => <BoardC board={board}/>)}

        </React.Fragment>
    );
}