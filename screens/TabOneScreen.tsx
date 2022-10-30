import {
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
// import { Text, View } from "../components/Themed";

import {
  BackdropBlur,
  BlurMask,
  Canvas,
  Circle,
  Fill,
  Group,
  RoundedRect,
  Shadow,
} from "@shopify/react-native-skia";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/adaptive-icon.png")}
        style={{ height: "100%", width: "100%", position: "absolute" }}
      />
      <Canvas style={{ flex: 1, width: "80%" }}>
        {/* <Fill color="#E6EDF2" /> */}

        <RoundedRect
          x={50}
          y={500}
          width={100}
          height={100}
          r={20}
          color="#ecf0f3"
        >
          <Shadow dx={5} dy={5} blur={8} color="#d1d9e6" />
          <Shadow dx={-5} dy={-5} blur={8} color="#fff" />
        </RoundedRect>

        <RoundedRect
          x={55}
          y={505}
          width={90}
          height={90}
          r={15}
          color="#ecf0f3"
        >
          {/* <Shadow dx={18} dy={18} blur={25} color="#d1d9e6" inner />
        <Shadow dx={-18} dy={-18} blur={25} color="#fff" inner /> */}
        </RoundedRect>

        <RoundedRect
          x={250}
          y={500}
          width={100}
          height={100}
          r={20}
          color="#ecf0f3"
        >
          {/* <Shadow dx={18} dy={18} blur={25} color="#d1d9e6" />
        <Shadow dx={-18} dy={-18} blur={25} color="#fff" /> */}
        </RoundedRect>

        <RoundedRect
          x={255}
          y={505}
          width={90}
          height={90}
          r={15}
          color="#ecf0f3"
        >
          <Shadow dx={5} dy={5} blur={10} color="#d1d9e6" inner />
          <Shadow dx={-5} dy={-5} blur={10} color="#fff" inner />
        </RoundedRect>

        <RoundedRect
          x={50}
          y={300}
          width={100}
          height={100}
          r={20}
          color="#ecf0f3"
        >
          {/* <BlurMask blur={20} style="normal" /> */}
          <BackdropBlur
            blur={4}
            clip={{ x: 50, y: 500, width: 256, height: 128 }}
          >
            <Fill color="rgba(0, 0, 0, 0.2)" />
          </BackdropBlur>
        </RoundedRect>
      </Canvas>

      <KeyboardAvoidingView style={{ backgroundColor: "blue", width: "100%" }}>
        <TextInput />
      </KeyboardAvoidingView>
    </View>
  );
}

// bg color

// color: #ECFOFS

// shadow 1

// blur: 3Opx

// X and Y: 18px
// opacity: 100%
// color: #D1ID9E6

// shadow 2

// blur: 3O0px
// X and Y: -18px
// opacity: 100%
// color: #FFF
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ecf0f3",
    // position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
