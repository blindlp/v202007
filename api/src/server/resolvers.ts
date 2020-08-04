import { queries as onboardingQueries } from "../feature/onboarding/resolver";

export const resolvers = {
  Query: {
    ...onboardingQueries,
  },
};
