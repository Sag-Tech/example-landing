import { stringifyQuery } from "~/helpers/query";
import ApiBase from "../base";
import apiPaths from "../paths";
import { RequestParams } from "../types";
import { GetTechnologyResponse, GetTechnologiesResponse } from "./types";

class ApiTechnologies extends ApiBase {
  public getTechnologies = (searchParams?: RequestParams) => {
    const search = searchParams ? stringifyQuery(searchParams) : "";
    return this.get<never, GetTechnologiesResponse>(search);
  };

  public getTechnology = (id: string) =>
    this.get<never, GetTechnologyResponse>(apiPaths.BY_ID(id));
}

const apiTechnologies = new ApiTechnologies("/technologies");

export default apiTechnologies;
