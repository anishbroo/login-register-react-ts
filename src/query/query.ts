import { gql } from "@apollo/client";

export interface GenderDataResponse {
  getGenders: GenderData[];
}

export interface GenderData {
  id: string;
  gender: string;
}
export const GET_GENDERS = gql`
  query {
    getGenders {
      id
      gender
    }
  }
`;

export interface CountriesDataResponse {
  getCountries: CountriesData[];
}

export interface CountriesData {
  code: string;
  name: string;
}
export const GET_COUNTRIES = gql`
  query {
    getCountries {
      code
      name
    }
  }
`;
