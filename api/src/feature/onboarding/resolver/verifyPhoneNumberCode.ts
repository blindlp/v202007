import { MutationResolvers } from "@corecodeio/libraries/api";
import { IContext } from "../../../server/interface/IContext";
import { OnboardingControllerInjectionKey } from "../InjectionKeys";

export const verifyPhoneNumberCode: MutationResolvers<
  IContext
>["verifyPhoneNumberCode"] = (parent, { input }, { dependencies }) => {
  try {
    const onboardingController = dependencies.provide(
      OnboardingControllerInjectionKey
    );

    return onboardingController.verifyPhoneNumberCode(input);
  } catch (error) {}
};
