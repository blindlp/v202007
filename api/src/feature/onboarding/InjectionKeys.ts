import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { OnboardingController } from "./controller/OnboardingController";

export const OnboardingControllerInjectionKey: InjectionKey<OnboardingController> = {
  name: "MessageSourceDigestInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const onboardingController = new OnboardingController();
    return onboardingController;
  },
};
