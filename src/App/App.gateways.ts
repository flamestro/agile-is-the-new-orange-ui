import {BoardResponse, CardResponse, LaneResponse} from "./App.models";

export const fetchBoard = async (userId: String) => {
    return await fetch("http://localhost:8080/board?userId=" + userId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    }).then(res => res.json())
        .then(
            (result: BoardResponse) => {
                return result;
            }
        );
}

export const createBoard = async (name: String) => {
    return await fetch("http://localhost:8080/board?name=" + name, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    }).then(res => res.json())
        .then(
            (result: BoardResponse) => {
                return result;
            }
        );
}

export const createLane = async (boardId: String) => {
    return await fetch("http://localhost:8080/board/" + boardId + "/lane", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    }).then(res => res.json())
        .then(
            (result: LaneResponse) => {
                return result;
            }
        );
}

export const createCard = async (boardId: String, laneId: String) => {
    return await fetch("http://localhost:8080/board/" + boardId + "/lane/" + laneId + "/card/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    }).then(res => res.json())
        .then(
            (result: CardResponse) => {
                return result;
            }
        );
}