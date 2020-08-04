import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  dependencies,
  DependencyContext,
} from "./src/common/context/DependencyContext";
import OnboardingNavigator from "./src/navigation/navigator/OnboardingNavigator";

export const App: React.FC<{}> = () => {
  return (
    <DependencyContext.Provider value={dependencies}>
      <NavigationContainer>
        <OnboardingNavigator />
      </NavigationContainer>
    </DependencyContext.Provider>
  );
};

export default App;
