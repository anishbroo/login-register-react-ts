import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation massRegister($input: MassUserUpload) {
    massRegister(input: $input) {
      sup_id
      sup_name
    }
  }
`;
export interface InputMassRegister {
  input: Input;
}

interface ByDate {
  from: string;
  to: string;
}

interface Input {
  data: Datum[];
}

interface Datum {
  umva_id?: string;
  first_name: string;
  last_name: string;
  gender: string;
  country: string;
  birthday: string;
  head_of_family?: boolean;
}

interface Farmerfield {
  id: string;
  user_id: string;
  farmer_field: string;
  field_size: string;
  land: boolean;
  owner: boolean;
  unit_id: string;
  field_type: string;
  boundaries: Boundaries;
  question_answer: Questionanswer[];
  status: boolean;
}

interface Questionanswer {
  id: string;
  question_id: string;
  answer: string;
}

interface Boundaries {}

interface Account {
  account_id: string;
  user_id: string;
  role_id: string;
  is_company: boolean;
  official_account: string;
  value_type_id: string;
  bank_accounts: Bankaccount[];
}

interface Bankaccount {
  bank2account_id: number;
  bank_id: number;
  account_id: number;
  bankaccount: string;
  isLocked: boolean;
  stamp: string;
  value_type_id: number;
}
