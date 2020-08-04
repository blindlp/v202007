import { Request, Response } from "express";
import { IMessagePayload } from "../interfaces/IMessagePayload";
import { MessageSourceDigest } from "../util/MessageSourceDigest";

export class MessageSourceController {
  private messageSourceDigest: MessageSourceDigest;

  constructor(messageSourceDigest: MessageSourceDigest) {
    this.messageSourceDigest = messageSourceDigest;
  }

  messageSource(req: Request, res: Response) {
    // recibir la solicitud (payload de twilio o messagebird MessageSourceProvider)

    // estandarizar la solicitud (MessageSource{Digest|Parser} || MessageFormatter)
    const payload: IMessagePayload = this.messageSourceDigest.parseRequestBody(
      req.body
    );

    payload.currentTime;
    payload.message;
    payload.from;

    // TDD - Test Driven Development
    // Pruebas unitarias Unit tests - jest, mocha, chai
    // Prueba integrales Integration Tests - jest, mocha, chai
    // E2E End to end cypress.io

    // guardar la metadata del mensaje en una base de datos ??

    // notificar a maría (native client) que recibió un mensaje

    // PostRequestServer, MVC, MessageFormatter, MessageController
    // Dependency Injection
    res.status(200).json({ status: "success" });
  }
}
