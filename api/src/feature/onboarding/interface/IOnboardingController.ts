import {
  MutationVerifyPhoneNumberCodeArgs,
  OnboardingSession,
  QuerySendPhoneNumberVerificationCodeArgs,
} from "@corecodeio/libraries/api";

export interface IOnboardingController {
  sendPhoneNumberVerificationCode: (
    input: QuerySendPhoneNumberVerificationCodeArgs["input"]
  ) => Promise<boolean>;
  verifyPhoneNumberCode: (
    input: MutationVerifyPhoneNumberCodeArgs["input"]
  ) => Promise<OnboardingSession>;
}
