import { StyleSheet } from "react-native";

export const colors = {
  black: "#1a1917",
  gray: "#888888"
};

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.black
  },
  container: {
    flex: 1
  },
  title: {
    paddingHorizontal: 30,
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  titleDark: {
    color: colors.black
  },
  slider: {
    // marginTop: 15,
    overflow: "visible" // for custom animations
  },
  sliderContentContainer: {
    // paddingVertical: 10 // for custom animation
  }
});
