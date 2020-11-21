import {Card} from "../../App/App.models";
import React, {useState} from "react";
import styled from "styled-components";
import {deleteCard} from "../../App/App.gateways";

export interface CardProps {
    card: Card;
    boardId: String;
    laneId: String;
}

const StyledCard = styled.div`
    border-bottom: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledDeleteButton = styled.div`
    font-weight: bold;    
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-left: 10px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    &:hover{
      cursor: pointer;
    }
`

export function CardC({card, boardId, laneId}: CardProps) {
    const [isHovering, setHovered] = useState(false);
    const toggleIsHovering = () => {
        setHovered(!isHovering)
    }

    return (
        <React.Fragment>
            <StyledCard key={card.id} onMouseEnter={toggleIsHovering} onMouseLeave={toggleIsHovering}>
                <span>{card.name}</span>
                {isHovering ?
                    <StyledDeleteButton onClick={() => {deleteCard(boardId, laneId, card.id)}}>
                        X
                    </StyledDeleteButton>
                    :
                    null}
            </StyledCard>
        </React.Fragment>
    );
}