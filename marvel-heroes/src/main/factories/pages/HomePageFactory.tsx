"use client";
import { HomePageLayout } from "../../../view/pages/home/HomePageLayout";
import { GetHeroesListUsecase } from "../../../data/usecases/GetHeroesListUsecase";
import { AxiosHttpClient } from "../../../infra/http/axiosHttpClient";

export const HomePageFactory = () => {
  const httpClient = new AxiosHttpClient();
  const getHeroesList = new GetHeroesListUsecase("/characters", httpClient);

  return <HomePageLayout getHeroesList={getHeroesList} />;
};
