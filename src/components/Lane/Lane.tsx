import {Lane} from "../../App/App.models";
import React from "react";
import {CardC} from "../Card/Card";
import styled from "styled-components";

export interface LaneProps {
    lane: Lane;
}

const StyledLane = styled.div`
    border: 1px solid black;
    padding: 10px;
`

export function LaneC({lane}: LaneProps) {
    return (
        <StyledLane>
            Lane {lane.name}
            <div>
                {lane.cards.length !== 0 ?
                    (lane.cards.map(card => (
                        <CardC key={card.id} card={card}/>
                    )))
                    :
                    (<button>add a card to this lane</button>)
                }
            </div>
        </StyledLane>
    );
}