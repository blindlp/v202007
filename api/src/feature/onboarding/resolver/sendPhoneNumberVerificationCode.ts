import { OnboardingControllerInjectionKey } from "../InjectionKeys";

export const sendPhoneNumberVerificationCode = (
  parent,
  input,
  { dependencies },
  info
): Promise<boolean> => {
  try {
    const onboardingController = dependencies.provide(
      OnboardingControllerInjectionKey
    );

    return onboardingController.sendPhoneNumberVerificationCode(input);
  } catch (error) {}
};
