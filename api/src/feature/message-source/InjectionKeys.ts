import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { MessageSourceController } from "./controller/MessageSourceController";
import { MessageSourceDigest } from "./util/MessageSourceDigest";

export const MessageSourceControllerInjectionKey: InjectionKey<MessageSourceController> = {
  name: "MessageSourceControllerInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const messageSourceDigest = dependencies.provide(
      MessageSourceDigestInjectionKey
    );
    const messageSourceController = new MessageSourceController(
      messageSourceDigest
    );

    return messageSourceController;
  },
};

export const MessageSourceDigestInjectionKey: InjectionKey<MessageSourceDigest> = {
  name: "MessageSourceDigestInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const messageSourceController = new MessageSourceDigest();
    return messageSourceController;
  },
};
