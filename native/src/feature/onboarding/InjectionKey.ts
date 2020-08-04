import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { Onboarding } from "./model/Onboarding";

export const OnboardingInjectionKey: InjectionKey<Onboarding> = {
  name: "OnboardingInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const onboarding = new Onboarding();
    return onboarding;
  },
};
