import { MessageSourceController } from "../feature/message-source/controller/MessageSourceController";
import { MessageSourceControllerInjectionKey } from "../feature/message-source/InjectionKeys";
import app, { dependencies } from "./apollo";

const messageSourceController = dependencies.provide<MessageSourceController>(
  MessageSourceControllerInjectionKey
);

app.post(
  "/message-source",
  messageSourceController.messageSource.bind(messageSourceController)
);
