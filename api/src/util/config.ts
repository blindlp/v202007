import convict from "convict";

const config = convict({
  env: {
    doc: "The applicaton environment.",
    format: ["production", "staging", "test"],
    default: "test",
    env: "NODE_ENV",
  },

  flags: {
    verifiedPhoneNumbers: {
      doc: "test phone numbers",
      format: "*",
      default: Array(15)
        .fill(null)
        .map((_, i) => `+5020000000${i}`),
      env: "VERIFIED_PHONE_NUMBERS",
    },
  },

  twilio: {
    aid: {
      doc: "Twilio Account SID",
      format: "*",
      default: null,
      env: "TWILIO_ACCOUNT_SID",
      arg: "twilio-account-sid",
    },

    verifyServiceID: {
      doc: "Twilio SMS Service ID",
      format: "*",
      default: null,
      env: "TWILIO_VERIFY_SID",
      arg: "twilio-sms-sid",
    },

    authToken: {
      doc: "Twilio Auth Token",
      format: "*",
      default: null,
      env: "TWILIO_AUTH_TOKEN",
      arg: "twilio-auth-token",
    },
  },

  jwt: {
    algorithm: {
      doc: "The algorithm to use for signing tokens",
      format: ["HS256", "HS384", "HS512"],
      default: "HS256",
      env: "JWT_ALGORITHM",
      arg: "jwt-algorithm",
    },

    issuer: {
      doc: "Token issuer",
      format: "String",
      default: "CORECODEIO",
      env: "JWT_ISSUER",
      arg: "jwt-issuer",
    },

    audience: {
      doc: "Token audience",
      format: "url",
      default: "https://api.core-code.io",
      env: "JWT_AUDIENCE",
      arg: "jwt-audience",
    },

    privateKey: {
      doc: "Base64 encoded secret used for verifying the token",
      format: "String",
      default: null,
      env: "JWT_PRIVATE_KEY",
      arg: "jwt-private-key",
    },

    publicKey: {
      doc: "Base64 encoded public key used for verifying the token",
      format: "String",
      default: null,
      env: "JWT_PUBLIC_KEY",
      arg: "jwt-public-key",
    },
  },
});

export default config;
