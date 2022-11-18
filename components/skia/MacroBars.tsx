import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Box,
  Fill,
  Group,
  translate,
  useComputedValue,
  useLoop,
  mix,
} from "@shopify/react-native-skia";
import VerticalProgressBar from "./VerticalProgressBar";
// import { mix } from "react-native-redash";
import Colors from "../../constants/Colors";

const theme = Colors.light;

const MacroBars = () => {
  const t = useLoop({ duration: 3000 });
  const x = useComputedValue(() => mix(t.current, 0, 180), [t]);
  const progress = useComputedValue(() => x.current / 192, [x]);
  return (
    <Group transform={translate({ x: 62, y: 310 })}>
      <VerticalProgressBar
        progress={progress}
        color={theme.prime2}
        position={0}
        title={"Protein"}
      />
      <VerticalProgressBar
        progress={progress}
        color={theme.prime2}
        position={55 + 60}
        title={"Protein"}
      />
      <VerticalProgressBar
        progress={progress}
        color={theme.prime2}
        position={55 + 60 + 60 + 55}
        title={"Protein"}
      />
    </Group>
  );
};

export default MacroBars;

const styles = StyleSheet.create({});
