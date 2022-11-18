import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import { Canvas } from "@shopify/react-native-skia";
import CalorieBar from "../components/skia/CalorieBar";
import { CircleProgressBar } from "../components/skia/CircleProgressBar";

const theme = Colors.light;

// ToDo: link state and values userProfile

const Home = ({ navigation }: any) => {
  const heandleOnProfile = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.titleText}>Calories</Text>
        <Pressable onPress={heandleOnProfile}>
          <Feather style={styles.icon} name="user" size={32} color="black" />
        </Pressable>
      </Header>
      <Canvas style={styles.canvas}>
        <CalorieBar />
        {/* <CircleProgressBar progress={progress} /> */}

        {/* <MacroBars/> */}
      </Canvas>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme.background,
    // width: "100%",
    // paddingTop: "45%",
  },
  icon: {
    height: 32,
    width: 32,
    zIndex: 1000,
    marginRight: 15,
  },
  text: {
    color: theme.textS,
    textAlign: "left",
    zIndex: 1000,
    fontFamily: "Montserrat_400Regular",
  },
  titleText: {
    color: theme.textS,
    textAlign: "left",
    zIndex: 1000,
    fontFamily: "Montserrat_400Regular",
    fontSize: 32,
  },
  canvas: {
    flex: 1,
    width: "100%",
    // height: "70%",
    zIndex: 1010,
    backgroundColor: "red",
  },
});
