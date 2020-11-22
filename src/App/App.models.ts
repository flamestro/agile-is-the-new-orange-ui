export interface Card {
  id: string;
  name: string;
  description: string;
}

export interface Lane {
  id: string;
  name: string;
  cards: Card[];
}

export interface Board {
  id: string;
  name: string;
  lanes: Lane[];
}

export interface BoardResponse {
  status: string;
  boards?: Board[];
}

export interface LaneResponse {
  status: string;
  lane?: Lane;
}

export interface CardResponse {
  status: string;
  card?: Card;
}
