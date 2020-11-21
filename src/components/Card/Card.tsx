import {Card} from "../../App/App.models";
import React from "react";
import styled from "styled-components";

export interface CardProps {
    card: Card;
}

const StyledCard = styled.div`
    border-bottom: 1px solid black;
    padding: 10px;
`

export function CardC({card}: CardProps) {
    return (
        <React.Fragment>
            <StyledCard key={card.id}>
                {card.name}
            </StyledCard>
        </React.Fragment>
    );
}