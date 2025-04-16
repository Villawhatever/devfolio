import { Edge, Node } from "./generic";

export interface AllMongodbVillawhateverEvents {
  edges: Edge[],
};

export interface JudgeEvent extends Node {
  organizer: string,
  date: Date,
  city: City,
  game: string,
  name: string,
  role: string | undefined,
};

export interface City {
  name: string,
  coords: number[],
};