import {Board} from "../../App/App.models";
import React from "react";
import {LaneC} from "../Lane/Lane";

export interface BoardProps {
    board: Board
}

export const BoardC = ({board}: BoardProps ) => {
    return (
        <ul>
            {board.lanes.map(lane => (
                <LaneC lane={lane}/>
            ))}
        </ul>
    );
}