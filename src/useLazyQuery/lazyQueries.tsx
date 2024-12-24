import { gql } from "@apollo/client";

export interface UserData {
  id: string;
  user_id: string;
  cap_limit: number;
  membership_charge: number;
  agent_umva_id: string;
  transaction_amount: number;
  transaction_date: string;
  valid_unit: null;
  valid_for: null;
  __typename: string;
}

export interface GetUserResponse {
  getUserCap: UserData[];
}

export const GET_USERCAP = gql`
  query {
    getUserCap {
      id
      user_id
      cap_limit
      membership_charge
      agent_umva_id
      transaction_amount
      transaction_date
      valid_unit
      valid_for
    }
  }
`;
