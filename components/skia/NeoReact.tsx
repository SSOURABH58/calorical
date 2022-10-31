import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import {
  Group,
  rect,
  RoundedRect,
  rrect,
  Shadow,
  SkiaMutableValue,
  useCanvas,
  useComputedValue,
  useSharedValueEffect,
  useValue,
  Text,
  useFont,
  SkiaValue,
} from "@shopify/react-native-skia";
import Colors from "../../constants/Colors";
import Animated, { useSharedValue } from "react-native-reanimated";
import { mix } from "react-native-redash";

const theme = Colors.light;

interface NeoReact {
  radius: number;
  children?: ReactNode;
  animatedValue: SkiaValue<number>;
}

const NeoReact: React.FC<NeoReact> = ({ children, radius, animatedValue }) => {
  const { size } = useCanvas();
  const rct = useComputedValue(() => {
    return rrect(
      rect(15, 15, size.current.width - 30, size.current.height - 30),
      radius,
      radius
    );
  }, [size]);

  const opacity = useComputedValue(
    () => animatedValue.current,
    [animatedValue]
  );
  return (
    <Group opacity={opacity}>
      <RoundedRect rect={rct} color={theme.background}>
        <Shadow dx={5} dy={5} blur={5} color={theme.shadowD} />
        <Shadow dx={-5} dy={-5} blur={5} color={theme.shadowL} />
        {children && children}
      </RoundedRect>
    </Group>
  );
};

export default NeoReact;

const styles = StyleSheet.create({});
