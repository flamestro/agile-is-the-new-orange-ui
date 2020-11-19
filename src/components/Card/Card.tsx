import {Card} from "../../App/App.models";
import React, {useState} from "react";
import styled from "styled-components";
import {Modal} from "../Modal";
import {StyledAddButton} from "../Lane/Lane";
import {createCard, createLane} from "../../App/App.gateways";

export interface CardProps {
    card: Card;
}

const StyledCard = styled.div`
    border: 1px solid black;
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