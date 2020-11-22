import { BoardResponse, CardResponse, LaneResponse } from "./App.models";

export const fetchBoard: (userId: string) => Promise<BoardResponse> = async (
  userId: string
) => {
  return fetch(`http://localhost:8080/board?userId=${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((result: BoardResponse) => {
      return result;
    });
};

export const createBoard = async (userId: string, name: string) => {
  return fetch(`http://localhost:8080/board?name=${name}&userId=${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((result: BoardResponse) => {
      return result;
    });
};

export const createLane = async (boardId: string, laneName: string) => {
  return fetch(`http://localhost:8080/board/${boardId}/lane?name=${laneName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((result: LaneResponse) => {
      return result;
    });
};

export const createCard = async (
  boardId: string,
  laneId: string,
  cardName: string
) => {
  return fetch(
    `http://localhost:8080/board/${boardId}/lane/${laneId}/card?name=${cardName}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  )
    .then((res) => res.json())
    .then((result: CardResponse) => {
      return result;
    });
};

export const deleteBoard = async (boardId: string) => {
  return fetch(`http://localhost:8080/board/${boardId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((result: BoardResponse) => {
      return result;
    });
};

export const deleteLane = async (boardId: string, laneId: string) => {
  return fetch(`http://localhost:8080/board/${boardId}/lane/${laneId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((result: LaneResponse) => {
      return result;
    });
};

export const deleteCard = async (
  boardId: string,
  laneId: string,
  cardId: string
) => {
  return fetch(
    `http://localhost:8080/board/${boardId}/lane/${laneId}/card/${cardId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  )
    .then((res) => res.json())
    .then((result: CardResponse) => {
      return result;
    });
};
