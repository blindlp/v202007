import styled from "styled-components";
import { color } from "styled-system";

import { TouchableOpacity, Text } from "react-native";
import React from "react";

export const MainActionButton = () => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: "black", padding: 21, margin: 23 }}
    >
      <Text style={{ color: "#fff" }}></Text>
    </TouchableOpacity>
  );
};
