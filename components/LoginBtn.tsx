import { Pressable, StyleSheet, View, Text } from "react-native";
import React, { ReactNode } from "react";
import {
  Canvas,
  Fill,
  Group,
  Skia,
  TextBlob,
  useFont,
} from "@shopify/react-native-skia";

import NeoReact from "./skia/NeoReact";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const theme = Colors.light;

interface LoginBtn {
  title: string;
  onPress?: () => void;
  children?: ReactNode;
}

const LoginBtn: React.FC<LoginBtn> = ({ children, title, onPress }) => {
  const fontSize = 18;

  return (
    <Pressable onPress={onPress} style={styles.loginBtn}>
      {children}
      <Text style={styles.text}>{title}</Text>
      <Canvas style={styles.canvas}>
        <NeoReact radius={20} />
      </Canvas>
    </Pressable>
  );
};

export default LoginBtn;

const styles = StyleSheet.create({
  loginBtn: {
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    position: "relative",
    flexDirection: "row",
    // backgroundColor: "red",
  },
  canvas: {
    height: 90,
    width: Layout.window.width * 0.8 + 30,
    position: "absolute",
    zIndex: 100,
  },
  text: {
    color: theme.textD,
    fontSize: 18,
    zIndex: 1000,
    fontFamily: "Montserrat_600SemiBold",
  },
});
