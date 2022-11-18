import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  runSpring,
  mix,
  Blur,
  Canvas,
  Circle,
  Fill,
  Group,
  LinearGradient,
  rect,
  useFont,
  vec,
  useTouchHandler,
  useValue,
  fitRects,
  rect2rect,
  useComputedValue,
  useLoop,
} from "@shopify/react-native-skia";
import Layout from "../../constants/Layout";
import { CircleProgressBar } from "./CircleProgressBar";
import MacroBars from "./MacroBars";
import VerticalProgressBar from "./VerticalProgressBar";
import Colors from "../../constants/Colors";

const theme = Colors.light;

const width = 412;
const height = 800;
const src = rect(0, 0, width, height);

const CalorieBar = () => {
  //   const r = 128;
  const window = Layout.window;
  //   const dst = rect(0, 0, cHeight, cWidth);
  //   const dst = rect(0, 0, window.width, 350);
  const dst = rect(0, 0, window.width, window.height);
  //   const rects = fitRects("contain", src, src);
  //   const rects = fitRects("cover", src, src);
  const rects = fitRects("contain", src, dst);
  const transform = rect2rect(rects.src, rects.dst);
  //   const transform = rect2rect(rects.src, rects.dst);
  //   const translateY = useValue(0);
  //   const offsetY = useValue(0);
  const t = useLoop({ duration: 3000 });
  const x = useComputedValue(() => mix(t.current, 0, 180), [t]);
  const progress = useComputedValue(() => x.current / 192, [x]);
  const font = useFont(
    require("./../../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    17
  );

  if (!font) {
    return null;
  }
  return (
    // <Group>
    <Group transform={transform}>
      <CircleProgressBar progress={progress} />
      <MacroBars />
      {/* <VerticalProgressBar
        progress={progress}
        color={theme.prime2}
        position={0}
        title={"Protein"}
      /> */}
    </Group>
  );
};

export default CalorieBar;

const styles = StyleSheet.create({});
