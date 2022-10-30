import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "./../constants/Colors";
import LoginBtn from "../components/LoginBtn";
import { AntDesign } from "@expo/vector-icons";

const theme = colors.light;

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textCont}>
        <Text style={[styles.text, { fontSize: 32 }]}>{`Welcome`}</Text>
        <Text
          style={[styles.text, { fontSize: 18 }]}
        >{`Let's start a healthy diet `}</Text>
      </View>
      <LoginBtn title="Login with Google">
        <AntDesign
          style={styles.icon}
          name="google"
          size={32}
          color={theme.textD}
        />
      </LoginBtn>
      <LoginBtn title="Login with Apple">
        <AntDesign
          style={styles.icon}
          name="apple1"
          size={32}
          color={theme.textD}
        />
      </LoginBtn>
    </View>
  );
};

export default LoginScreen;

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
