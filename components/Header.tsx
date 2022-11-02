import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import Colors from "../constants/Colors";

const theme = Colors.light;

interface Header {
  children?: ReactNode;
}

const Header: React.FC<Header> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 32,
    width: "100%",
    paddingHorizontal: 32,
    // backgroundColor: "red",
  },
  //   icon: {
  //     height: 32,
  //     width: 32,
  //     zIndex: 1000,
  //     marginRight: 15,
  //   },
  //   text: {
  //     color: theme.textS,
  //     textAlign: "left",
  //     zIndex: 1000,
  //     fontFamily: "Montserrat_400Regular",
  //     fontSize: 32,
  //   },
  //   textCont: {
  //     justifyContent: "center",
  //     alignItems: "flex-start",
  //     width: "80%",
  //     marginBottom: 80,
  //   },
});
