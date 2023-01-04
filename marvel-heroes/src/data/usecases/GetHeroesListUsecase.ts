import {
  GetHeroesListParams,
  IGetHeroesListUsecase,
} from "../../domain/usecases/marvel/GetHeroesListUsecase";
import { IHttpClient } from "../http/http-client/httpClient";
import { MarvelHero } from "../../domain/models/marvel/MarvelHero";
import { MarvelApiResponse } from "../../domain/models/marvel/MarvelApiResponse";

export class GetHeroesListUsecase implements IGetHeroesListUsecase {
  constructor(
    private readonly url: string,
    private readonly httpClient: IHttpClient
  ) {}

  async execute(params: Partial<GetHeroesListParams>) {
    try {
      const { data } = await this.httpClient.request<
        MarvelApiResponse<MarvelHero>
      >({
        url: this.url,
        params,
        method: "get",
      });

      return data.data.results;
    } catch (e) {
      console.error(e);
      return [] as MarvelHero[];
    }
  }
}
