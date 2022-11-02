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
  animatedValue?: SkiaValue<number>;
  inner?: boolean;
}

const NeoReact: React.FC<NeoReact> = ({
  children,
  radius,
  animatedValue,
  inner,
}) => {
  const padding = !inner ? 30 : 0;
  const offset = !inner ? 15 : 0;
  const { size } = useCanvas();
  const rct = useComputedValue(() => {
    return rrect(
      rect(
        offset,
        offset,
        size.current.width - padding,
        size.current.height - padding
      ),
      radius,
      radius
    );
  }, [size]);

  const opacity = useComputedValue(
    () => animatedValue?.current,
    [animatedValue]
  );
  return (
    <Group opacity={opacity}>
      <RoundedRect rect={rct} color={theme.background}>
        {!inner ? (
          <>
            <Shadow dx={5} dy={5} blur={5} color={theme.shadowD} />
            <Shadow dx={-5} dy={-5} blur={5} color={theme.shadowL} />
          </>
        ) : (
          <Shadow dx={0} dy={0} blur={15} color={theme.shadowD} inner />
        )}
        {children && children}
      </RoundedRect>
    </Group>
  );
};

export default NeoReact;

const styles = StyleSheet.create({});
