import { Dependencies } from "@corecodeio/libraries/di";
import React from "react";

export const dependencies = new Dependencies();
export const DependencyContext = React.createContext(dependencies);
