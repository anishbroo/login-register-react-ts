import { gql } from "@apollo/client";

export interface FillReportData {
  message: ReportData;
}

export interface ReportData {
  umva_id: string;
  account_from: string;
  amount: string;
  account_to: string;
  converted_amount: string;
  date: string;
  from_page_id: string;
  key: string;
}

export interface ReportDataResponse {
  fillReport: FillReportData;
}

export const GET_REPORT = gql`
  query fillReport($input: AdminReportInputs) {
    fillReport(input: $input) {
      message
      data {
        umva_id
        account_from
        amount
        account_to
        converted_amount
        date
        from_page_id
        key
      }
    }
  }
`;
