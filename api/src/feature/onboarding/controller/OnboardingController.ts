import { prisma } from "@corecodeio/database";
import { ApolloError } from "apollo-server-express";
import config from "../../../util/config";
import { ISMSVerification } from "../../../util/twilio/interface/ISMSVerification";
import { IOnboardingController } from "../interface/IOnboardingController";

const env = config.get("env");
const { verifiedPhoneNumbers } = config.get("flags");

export class OnboardingController implements IOnboardingController {
  private twilioSMSVerification: ISMSVerification;
  private verifiedPhoneNumbers = [];

  constructor(twilioSMSVerification: ISMSVerification) {
    this.twilioSMSVerification = twilioSMSVerification;
    this.verifiedPhoneNumbers = env === "test" ? verifiedPhoneNumbers : [];
  }

  async verifyPhoneNumberCode({ phoneNumber, code }) {
    // verify that number does not exist
    // verify that number is not verified

    const isPhoneNumberVerified = (
      await prisma.phoneNumber.findMany({
        where: { number },
      })
    ).filter((phoneNumber) => phoneNumber.verifiedAt !== null)[0];

    if (isPhoneNumberVerified) {
      throw new Error("El número ya existe.");
      throw OnboardingError.phoneNumberIsVerified;
      throw new ApolloError("El número ya existe.", "PHONE_NUMBER_EXISTS");
    }

    try {
      const isTwilioVerified = await this.twilioSMSVerification.verify(
        phoneNumber,
        code
      );

      if (!isTwilioVerified) {
        return false;
      }

      await prisma.phoneNumber.create({
        data: {
          number,
          verifiedAt: new Date(),
        },
      });

      return isTwilioVerified;
    } catch (error) {
      throw OnboardingError.twilioPhoneNumberVerificationFailed;
    }
  }

  async sendPhoneNumberVerificationCode({ phoneNumber }) {
    // TODO check if phone number already exists (apply to resolver middleware)

    if (this.verifiedPhoneNumbers.includes(phoneNumber)) {
      return true;
    }

    return this.twilioSMSVerification.send(phoneNumber);
  }
}
