import { Dependencies } from "@corecodeio/libraries/di";
import { MessageSourceController } from "./feature/message-source/controller/MessageSourceController";
import { MessageSourceControllerInjectionKey } from "./feature/message-source/InjectionKeys";
import server from "./server";

const dependencies = new Dependencies();
const messageSourceController = dependencies.provide<MessageSourceController>(
  MessageSourceControllerInjectionKey
);

server.post(
  "/message-source",
  messageSourceController.messageSource.bind(messageSourceController)
);

// recibir la solicitud (payload de twilio o messagebird MessageSourceProvider)
// estandarizar la solicitud (MessageSource{Digest|Parser} || MessageFormatter)
// guardar la metadata del mensaje en una base de datos
// notificar a maría (native client) que recibió un mensaje
// PostRequestServer, MVC, MessageFormatter, MessageController
// Dependency Injection

server.listen("8001", () => {
  console.log("listening");
});
