import React from "react";
import { Text } from "react-native";
import defaultStyles from "../../config/styles";
const AppText = ({ children, style, ...props }) => {
  return (
    <Text {...props} style={[defaultStyles.primaryText, style]}>
      {children}
    </Text>
  );
};
export default AppText;
