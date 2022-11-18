import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Box,
  BoxShadow,
  Circle,
  Fill,
  Group,
  Path,
  rect,
  rrect,
  Shadow,
  Skia,
  SkiaValue,
  SweepGradient,
  translate,
  useComputedValue,
  useFont,
  Text,
  mix,
} from "@shopify/react-native-skia";
import Colors from "../../constants/Colors";
// import { mix } from "react-native-redash";

const theme = Colors.light;

interface VerticalProgressBar {
  progress: SkiaValue<number>;
  color: string;
  position: number;
  title: string;
}

const VerticalProgressBar: React.FC<VerticalProgressBar> = ({
  progress,
  color,
  position,
  title,
}) => {
  const frame = rrect(rect(0, 0, 60, 240), 40, 40);
  const emptyBar = rrect(rect(5, 5, 50, 230), 40, 40);

  const path = Skia.Path.Make();
  path.moveTo(30, 210);
  path.lineTo(30, 30);
  // path.close();

  const font18 = useFont(
    require("./../../assets/fonts/Montserrat-SemiBold.ttf"),
    18
  );
  const font16 = useFont(
    require("./../../assets/fonts/Montserrat-SemiBold.ttf"),
    16
  );

  const text = useComputedValue(
    () => `${Math.round(progress.current * 100)}g`,
    [progress]
  );

  // const circleY = useComputedValue(
  //   () => mix(progress.current, 210, 30),
  //   [progress]
  // );

  const textOffset = useComputedValue(
    () => (font16 ? 30 - font16.getTextWidth(text.current) / 2 : 0),
    [text, font16]
  );

  const textWidth = font18 ? font18.getTextWidth(title) : 0;

  if (!(font18 && font16)) {
    return null;
  }

  return (
    <Group transform={translate({ x: position, y: 36 })}>
      <Group>
        <Text
          x={30 - textWidth / 2}
          y={0}
          font={font18}
          text={title}
          color={theme.textD}
        />
        <Text
          x={textOffset}
          y={font18.getSize() + 5}
          font={font16}
          text={text}
          color={theme.textL}
        />
      </Group>
      <Group transform={translate({ x: 0, y: 43 })}>
        <Box box={frame} color={theme.background}>
          <BoxShadow dx={5} dy={5} blur={5} color={theme.shadowD} />
          <BoxShadow dx={-5} dy={-5} blur={5} color={theme.shadowL} />
        </Box>
        <Box box={emptyBar} color={theme.background}>
          <BoxShadow dx={0} dy={0} blur={15} color={theme.shadowI} inner />
        </Box>
        <Group>
          {/* <SweepGradient c={vec(rO, rO)} colors={colors} /> */}
          {/* <Fill color={color} /> */}
          <Path
            path={path}
            style="stroke"
            strokeWidth={50}
            end={progress}
            strokeCap="round"
            color={color}
          >
            <Shadow dx={0} dy={0} blur={20} color={color} />
          </Path>
          {/* <Circle cx={30} cy={circleY} r={25} color={"blue"} /> */}
        </Group>
      </Group>
    </Group>

    //   <Box box={fromCircle(rO, rO, rI)} color={theme.background}>
    //     <BoxShadow dx={5} dy={5} blur={5} color={theme.shadowD} />
    //     <BoxShadow dx={-5} dy={-5} blur={5} color={theme.shadowL} />
    //     {/* <BoxShadow
    //       dx={25}
    //       dy={25}
    //       blur={80}
    //       color="rgba(0, 0, 0, 0.55)"
    //       inner
    //     /> */}
    //   </Box>
  );
};

export default VerticalProgressBar;

const styles = StyleSheet.create({});
