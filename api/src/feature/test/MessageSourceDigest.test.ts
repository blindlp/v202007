import { Dependencies } from "@corecodeio/libraries/di";
import { MessageSourceDigestInjectionKey } from "../message-source/InjectionKeys";
import { IMessageBirdPayload } from "../message-source/interfaces/IMessageBirdPayload";
import { IMessagePayload } from "../message-source/interfaces/IMessagePayload";

const dependencies = new Dependencies();
const messageSourceDigest = dependencies.provide(
  MessageSourceDigestInjectionKey
);

describe("MessageSourceDigest", () => {
  test("Should return the parsed payload of the request body", () => {
    const currentTime = "2020-07-14T02:28:51.11316996Z";
    const message = "Hello World Tests";
    const from = "+123456789";

    const messageBirdPayload: IMessageBirdPayload = {
      contactPhoneNumber: from,
      currentTime,
      payload: message,
    };

    const payload: IMessagePayload = {
      message,
      currentTime: new Date(currentTime),
      from,
    };
    
    expect(messageSourceDigest.parseRequestBody(messageBirdPayload)).toEqual(
      payload
    );
  });
});
