import { gql } from "@apollo/client";

export interface AddressData {
  id: string;
  country_code: string;
  country: string;
  area1: null;
  area2: null;
  area3: null;
  area4: null;
  area5: null;
  group: null;
  latitude: number;
  longitude: number;
}

export interface GetAddressResponse {
  getAddressById: AddressData;
}

export const GET_ADDRESS = gql`
  query ($id: ID!) {
    getAddressById(id: $id) {
      id
      country_code
      country
      area1
      area2
      area3
      area4
      area5
      group
      latitude
      longitude
    }
  }
`;
