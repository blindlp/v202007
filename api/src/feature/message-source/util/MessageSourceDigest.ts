import { IMessageBirdPayload } from "../interfaces/IMessageBirdPayload";
import { IMessagePayload } from "../interfaces/IMessagePayload";

export class MessageSourceDigest {
  parseRequestBody(body: IMessageBirdPayload): IMessagePayload {
    if (this.isMessageBirdPayload(body)) {
      return this.parseMessageBirdPayload(body);
    }
  }

  private parseMessageBirdPayload(body: IMessageBirdPayload): IMessagePayload {
    const from = body.contactPhoneNumber;
    const message = body.payload;
    const currentTime = new Date(body.currentTime);

    return {
      from,
      message,
      currentTime,
    };
  }

  private isMessageBirdPayload = (payload: IMessageBirdPayload): boolean => {
    return Boolean(payload?.contactPhoneNumber);
  };
}
