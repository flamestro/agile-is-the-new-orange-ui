import {Board} from "../../App/App.models";
import React from "react";
import {LaneC} from "../Lane/Lane";
import styled from "styled-components";

export interface BoardProps {
    board: Board
}

const StyledBoard = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: row;
`
export const BoardC = ({board}: BoardProps) => {
    return (
        <div>
            {board.lanes.length !== 0 ?
                (<StyledBoard>
                    {board.lanes.map(lane => (
                        <LaneC key={lane.id} lane={lane}/>
                    ))}
                </StyledBoard>)
                :
                (<StyledBoard>
                    <button>add a lane to this board</button>
                </StyledBoard>)
            }
        </div>
    );
}