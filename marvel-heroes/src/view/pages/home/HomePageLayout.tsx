"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { IGetHeroesListUsecase } from "../../../domain/usecases/marvel/GetHeroesListUsecase";
import { MarvelHero } from "../../../domain/models/marvel/MarvelHero";

interface Props {
  getHeroesList: IGetHeroesListUsecase;
}

export const HomePageLayout: FC<Props> = ({ getHeroesList }) => {
  const [heroes, setHeroes] = useState<MarvelHero[]>([]);

  const getHeroes = useCallback(async () => {
    const newHeroes = await getHeroesList.execute({ limit: 10 });
    setHeroes(newHeroes);
  }, [getHeroesList]);

  useEffect(() => {
    getHeroes();
  }, [getHeroes]);

  return (
    <div>
      Heróis:
      {heroes.map(({ name }, i) => (
        <h2 key={i}>{name}</h2>
      ))}
    </div>
  );
};
