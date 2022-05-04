import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  primaryText: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
    color: colors.dark,
  },
};
