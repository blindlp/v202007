import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import jwt from ".";
import { IJSONWebToken } from "./interface/IJSONWebToken";

export const JWTInjectionKey: InjectionKey<IJSONWebToken> = {
  name: "JWTInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    return jwt;
  },
};
