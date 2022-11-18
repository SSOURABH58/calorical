import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Canvas } from "@shopify/react-native-skia";
import NeoReact from "./skia/NeoReact";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export interface TextInputBoxi {
  children?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onActive?: (value: boolean) => void;
  height?: number;
  rootStyle?: object;
  inputLength?: number;
  fixedWidth?: number;
  unit?: string;
  showActive?: boolean;
}

const theme = Colors.light;

const TextInputBox: React.FC<TextInputBoxi> = ({
  children,
  placeholder,
  value,
  onChange,
  height,
  rootStyle,
  inputLength,
  fixedWidth,
  unit,
  onActive,
  showActive,
}) => {
  // const [text, onChangeText] = useState<string | undefined>(value?.toString());
  const [isActive, setIsActive] = useState(false);
  return (
    <View style={[styles.testInputBox, rootStyle]}>
      <View style={styles.boxCont}>
        <TextInput
          style={[
            styles.input,
            { width: fixedWidth },
            { color: showActive && isActive ? theme.indicatorLo : theme.textD },
          ]}
          onChangeText={onChange}
          value={`${value}${unit ? unit : ""}`}
          placeholder={placeholder}
          maxLength={inputLength}
          onFocus={() => {
            onActive && onActive(true);
            setIsActive(true);
          }}
          onBlur={() => {
            onActive && onActive(false);
            setIsActive(false);
          }}
        />
        <View style={styles.childCont}>{children && children}</View>
      </View>
      <Canvas style={styles.canvas}>
        <NeoReact radius={height ? height : 30} inner />
      </Canvas>
    </View>
  );
};

export default TextInputBox;

const styles = StyleSheet.create({
  testInputBox: {
    // width: "100%",
    // flex: 1,
    flexGrow: 1,
    height: 50,
    // margin: 15,
    position: "relative",
    flexDirection: "row",

    // backgroundColor: "red",
  },
  canvas: {
    height: 50,
    width: "100%",
    position: "absolute",
    zIndex: 100,
  },
  btnContent: {
    flexDirection: "row",
    // width: "100%",
    // height: "100%",
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
  input: {
    color: theme.textD,
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
    flexGrow: 1,
    margin: 0,
    padding: 0,
    // width: "100%",
    // flex: 1,
    // backgroundColor: "red",
  },
  boxCont: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 20,
    zIndex: 1000,
    // width: Layout.window.width * 0.4,
    // backgroundColor: "red",
    // width: "100%",
    flexGrow: 1,
  },
  childCont: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: 1,
  },
});
