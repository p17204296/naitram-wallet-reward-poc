import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  whiteText: {
    color: "white",
    fontSize: 24,
  },
  container: {
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  wrapperStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  rewardsContentStyle: {
    color: "white",
    fontSize: 24,
    width: 550,
    height: "98%",
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
    textAlign: "left",
    padding: 20,
    borderRadius: 10,
    margin: "auto",
    // position: 'static', /* Needed to contain the BottomBar absolutely within it */
  },
  searchTopbarStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    width: "100%",
    height: 14,
    padding: 20,
    borderRadius: 5, // Fix: Changed the value to a numeric value
  },
});

export const headerStyles = StyleSheet.create({
  backgroundImageStyle: {
    width: "100%",
    height: 100,
  },
  leftSideStyle: {
    display: "flex",
    flexDirection: "row", // Aligns children in a row
    justifyContent: "flex-start", // Aligns children to the start of the container (left side)
    gap: 5, // Keeps the gap property for spacing between items
    width: "33.3%",
  },
  rightSideStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: 10,
    width: "33.3%",
  },
svgContainerStyle: {
    display: "flex",
    backgroundColor: "#004d40",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
},
  profileHeadingStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 0,
    padding: 0,
  },
  profileSubheadingStyle: {
    color: "white",
    fontSize: 14,
    margin: 0,
    padding: 0,
  },
});
