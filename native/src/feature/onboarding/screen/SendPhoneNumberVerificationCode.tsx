import React from "react";
import { PrimaryButton } from "../../../common/component/button";
import { View } from "../../../common/component/view";
import { DependencyContext } from "../../../common/context/DependencyContext";
import { OnboardingInjectionKey } from "../InjectionKey";

export const SendPhoneNumberVerificationCode: React.FC<{}> = () => {
  const dependencies = React.useContext(DependencyContext);
  const onboarding = dependencies.provide(OnboardingInjectionKey);

  let [count, setCount] = onboarding.useSendPhoneNumberVerificationCode();

  const onSendPhoneNumberVerificationCode = async () => {
    try {
      await setCount(count + 1);
    } catch (error) {
      // TODO handle error
    }
  };

  return (
    <View container flex={1} justifyContent="center" bg="blue">
      <PrimaryButton mb={4} onPress={onSendPhoneNumberVerificationCode}>
        Send Codes {count}
      </PrimaryButton>
    </View>
  );
};

export default SendPhoneNumberVerificationCode;
