import { Pressable, StyleSheet, View, Text } from "react-native";
import React, { ReactNode } from "react";
import {
  Canvas,
  Fill,
  Group,
  mix,
  Skia,
  TextBlob,
  useFont,
  useSharedValueEffect,
  useValue,
} from "@shopify/react-native-skia";

import NeoReact from "./skia/NeoReact";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const theme = Colors.light;

interface LoginBtn {
  title: string;
  onPress?: () => void;
  children?: ReactNode;
}

const LoginBtn: React.FC<LoginBtn> = ({ children, title, onPress }) => {
  const fontSize = 18;
  const btnShrinkSize = 0.95;
  const btnAnimation = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: btnAnimation.value }],
      opacity: interpolate(btnAnimation.value, [1, btnShrinkSize], [1, 0.5]),
    };
  });

  const shadowOpacity = useValue(1);
  useSharedValueEffect(() => {
    shadowOpacity.current = interpolate(
      btnAnimation.value,
      [1, btnShrinkSize],
      [1, 0.1]
    );
  }, btnAnimation);

  return (
    <Pressable
      onPressIn={() => [
        (btnAnimation.value = withSpring(btnShrinkSize)),
        // (shadowOpacity.current = 0),
      ]}
      onPressOut={() => (btnAnimation.value = withSpring(1))}
      onPress={() => {
        onPress && onPress();
      }}
      style={styles.loginBtn}
    >
      <Animated.View style={[styles.btnContent, animatedStyles]}>
        {children}
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
      <Canvas style={styles.canvas}>
        <NeoReact radius={20} animatedValue={shadowOpacity} />
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
  btnContent: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.textD,
    fontSize: 18,
    zIndex: 1000,
    fontFamily: "Montserrat_600SemiBold",
  },
});
