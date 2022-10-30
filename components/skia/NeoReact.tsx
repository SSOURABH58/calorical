import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import {
  rect,
  RoundedRect,
  rrect,
  Shadow,
  useCanvas,
  useComputedValue,
} from "@shopify/react-native-skia";
import Colors from "../../constants/Colors";

const theme = Colors.light;

interface NeoReact {
  radius: number;
  children?: ReactNode;
}

const NeoReact: React.FC<NeoReact> = ({ children, radius }) => {
  const { size } = useCanvas();
  const rct = useComputedValue(() => {
    return rrect(
      rect(15, 15, size.current.width - 30, size.current.height - 30),
      radius,
      radius
    );
  }, [size]);
  return (
    <RoundedRect rect={rct} color={theme.background}>
      <Shadow dx={5} dy={5} blur={5} color={theme.shadowD} />
      <Shadow dx={-5} dy={-5} blur={5} color={theme.shadowL} />
      {children && children}
    </RoundedRect>
  );
};

export default NeoReact;

const styles = StyleSheet.create({});
