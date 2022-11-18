import { Shadow, SkiaValue } from "@shopify/react-native-skia";
import {
  BoxShadow,
  rect,
  rrect,
  Group,
  LinearGradient,
  translate,
  Circle,
  Skia,
  vec,
  Path,
  SweepGradient,
  useFont,
  Text,
  useComputedValue,
  Box,
} from "@shopify/react-native-skia";
import React from "react";
import Colors from "../../constants/Colors";

const theme = Colors.light;
const rO = 250 / 2;
const rI = 150 / 2;
const rB = (rO - rI) / 2 + rI;

// const r1 = 85;
const path = Skia.Path.Make();
path.addCircle(rO, rO, rB);
// path.addArc({ x: 25, y: 25, width: rB * 2, height: rB * 2 }, -90, 360);
const c = vec(rO, rO);

const fromCircle = (cx: number, cy: number, r: number) =>
  rrect(rect(cx - r, cy - r, 2 * r, 2 * r), r, r);

interface ProgressBarProps {
  progress: SkiaValue<number>;
}

const colors = [theme.prime1, theme.prime3];

export const CircleProgressBar = ({ progress }: ProgressBarProps) => {
  const font32 = useFont(
    require("./../../assets/fonts/Montserrat-SemiBold.ttf"),
    32
  );
  const font26 = useFont(
    require("./../../assets/fonts/Montserrat-SemiBold.ttf"),
    26
  );
  const font16 = useFont(
    require("./../../assets/fonts/Montserrat-SemiBold.ttf"),
    16
  );

  const caloriesTextWidth = useComputedValue(
    () => (font26 ? font26.getTextWidth("Calories") : 0),
    [font26]
  );
  // const caloriesTextWidth = font26 ? font26.getTextWidth("Calories") : 0;

  const text = useComputedValue(
    () => `${Math.round(progress.current * 100)}`,
    [progress]
  );
  const isK = useComputedValue(
    () => (progress.current * 100 > 999 ? true : false),
    [progress]
  );
  const text2 = useComputedValue(
    () =>
      `${Math.round(progress.current * 100)}${isK.current ? "K" : ""} to go`,
    [progress, isK]
  );
  const text1Offset = useComputedValue(
    () =>
      font26 && font32
        ? caloriesTextWidth.current / 2 -
          (font32.getTextWidth(text.current) + font26.getTextWidth("k")) / 2
        : 0,
    [text, font26, font32, caloriesTextWidth]
  );
  const kOffset = useComputedValue(
    () =>
      font32 ? text1Offset.current + font32.getTextWidth(text.current) : 0,
    [text1Offset, font32, text]
  );
  const text2Offset = useComputedValue(
    () =>
      font16
        ? caloriesTextWidth.current / 2 - font16.getTextWidth(text2.current) / 2
        : 0,
    [text2, font16, caloriesTextWidth]
  );

  if (!(font32 && font26 && font16)) {
    return null;
  }

  // const textWidth32 = font32.getTextWidth(text.current);
  // const textWidth16 = font16.getTextWidth(text2.current);

  // Todo: kOffset,text1Offset,text2Offset,isK
  return (
    <Group transform={translate({ x: 81, y: 36 })}>
      <Group>
        {/* <LinearGradient 
          start={vec(12, 12)}
          end={vec(200, 200)}
          colors={["#101113", "#2B2F33"]}
        /> */}
        <Box box={fromCircle(rO, rO, rO)} color={theme.background}>
          <BoxShadow dx={0} dy={0} blur={20} color={theme.shadowI} inner />
        </Box>
      </Group>

      <Box box={fromCircle(rO, rO, rI)} color={theme.background}>
        <BoxShadow dx={5} dy={5} blur={5} color={theme.shadowD} />
        <BoxShadow dx={-5} dy={-5} blur={5} color={theme.shadowL} />
        {/* <BoxShadow
          dx={25}
          dy={25}
          blur={80}
          color="rgba(0, 0, 0, 0.55)"
          inner
        /> */}
      </Box>
      <Group origin={{ x: rO, y: rO }} transform={[{ rotate: -(Math.PI / 2) }]}>
        <SweepGradient c={vec(rO, rO)} colors={colors} />
        <Path
          path={path}
          style="stroke"
          strokeWidth={50}
          end={progress}
          strokeCap="round"
        >
          <Shadow dx={0} dy={0} blur={15} color={colors[0]} />
        </Path>
        <Circle cx={rO * 2 - 25} cy={rO} r={25} color={colors[0]}>
          {/* <Shadow dx={0} dy={0} blur={15} color={colors[0]} /> */}
        </Circle>
      </Group>
      <Box box={fromCircle(rO, rO, rI)} color={theme.background} />
      <Group
        // origin={{
        //   x: font.getTextWidth("Calories") / 2,
        //   y: (font.getSize() * 3) / 2,
        // }}
        transform={translate({
          x: rO - caloriesTextWidth.current / 2,
          y: rO - rI + 50,
        })}
      >
        <Group>
          <Text
            x={text1Offset}
            y={0}
            font={font32}
            text={text}
            color={theme.textD}
          />
          <Text
            x={kOffset}
            y={0}
            font={font26}
            text={"K"}
            color={theme.textD}
          />
        </Group>
        {/* <Text
          x={caloriesTextWidth / 2 - textWidth32 / 2}
          y={0}
          font={font32}
          text={text}
          color={theme.textD}
        /> */}
        <Text
          y={font32.getSize()}
          x={0}
          font={font26}
          text={"Calories"}
          color={theme.textD}
        />
        <Text
          x={text2Offset}
          y={font32.getSize() + font26.getSize()}
          font={font16}
          text={text2}
          color={theme.textD}
        />
      </Group>
    </Group>
  );
};
