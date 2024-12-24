import { gql } from "@apollo/client";

export interface UserData {
  sup_id: string;
  sup_name: string;
  sup_status: number;
  user_password: string;
  user_email: string;
  user_level: number;
  passwordenc: string;
  umva_org_id: string;
  user_level_id: string;
  secret_question: null;
  secret_answer: string;
  gender: null;
  otp: null;
  bankaccount: null;
  created_at: string;
  stamp: null;
  is_new: null;
  accessible_groups: string[];
  accessible_group_ids: string[];
  count_accounts: number;
  role_names: string[];
  role_ids: string[];
  __typename: string;
}

export interface LoginData {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  user: UserData;
  force_pw_change: boolean;
  __typename: string;
}

export interface DataResponse {
  login: LoginData;
}

export const LOGIN_USER = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) {
      access_token
      refresh_token
      expires_in
      token_type
      user {
        sup_id
        sup_name
        sup_status
        user_password
        user_email
        user_level
        passwordenc
        umva_org_id
        user_level_id
        secret_question
        secret_answer
        gender
        otp
        bankaccount
        created_at
        stamp
        is_new
        accessible_groups
        accessible_group_ids
        count_accounts
        role_names
        role_ids
      }
      force_pw_change
    }
  }
`;
