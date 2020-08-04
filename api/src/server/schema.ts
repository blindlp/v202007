import { gql } from "apollo-server-express";

export const schema = gql`
  type Query {
    sendPhoneNumberVerificationCode(
      input: SendPhoneNumberVerificatioCodeInput!
    ): Boolean!
  }

  input SendPhoneNumberVerificatioCodeInput {
    phoneNumber: String!
  }
`;
