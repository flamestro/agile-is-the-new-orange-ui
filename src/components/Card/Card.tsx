import {Card} from "../../App/App.models";
import React, {useState} from "react";
import styled from "styled-components";
import {deleteCard} from "../../App/App.gateways";
import {StyledDeleteButton} from "../StyledDeleteButton/StyledDeleteButton";

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