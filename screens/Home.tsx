import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const theme = Colors.light;

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme.background,
    paddingTop: "45%",
  },
  icon: {
    height: 32,
    width: 32,
    zIndex: 1000,
    marginRight: 15,
  },
  text: {
    color: theme.textS,
    textAlign: "left",
    zIndex: 1000,
    fontFamily: "Montserrat_400Regular",
  },
  textCont: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "80%",
    marginBottom: 80,
  },
});
