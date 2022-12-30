import { MarvelHero } from "../../models/marvel/MarvelHero";

export interface GetHeroesListParams {
  nameStartsWith: string;
  modifiedSince: Date;
  comics: number[];
  series: number[];
  events: number[];
  stories: number[];
  orderBy: "name" | "modified" | "-name" | "-modified";
  limit: number;
  offset: number;
}

export interface IGetHeroesListUsecase {
  execute: (params: Partial<GetHeroesListParams>) => Promise<MarvelHero[]>;
}
