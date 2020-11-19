import {Lane} from "../../App/App.models";
import React from "react";

export interface LaneProps {
    lane: Lane;
}

export function LaneC({lane}: LaneProps) {
    return (
        <React.Fragment>
            Lane {lane.name}
            <ul>
                {lane?.cards.map(card => (
                    <li key={card.id}>
                        {card.name}
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}