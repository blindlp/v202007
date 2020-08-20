import { gql } from "apollo-server-express";

export const schema = gql`
  type Query {
    sendPhoneNumberVerificationCode(
      input: SendPhoneNumberVerificatioCodeInput!
    ): Boolean!
  }

  type Mutation {
    verifyPhoneNumberCode(
      input: VerifyPhoneNumberCodeInput!
    ): OnboardingSession!
  }

  input SendPhoneNumberVerificatioCodeInput {
    phoneNumber: String!
  }

  input VerifyPhoneNumberCodeInput {
    phoneNumber: String!
    code: String!
  }

  type OnboardingSession {
    token: String!
  }
`;
