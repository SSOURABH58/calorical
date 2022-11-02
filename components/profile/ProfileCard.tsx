import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Canvas } from "@shopify/react-native-skia";
import NeoReact from "../skia/NeoReact";
import Layout from "../../constants/Layout";

const theme = Colors.light;

interface ProfileCard {
  name: string;
}

const ProfileCard: React.FC<ProfileCard> = ({ name }) => {
  return (
    <View style={styles.profileCont}>
      <View style={styles.profileInfo}>
        <Feather
          style={styles.icon}
          name="user"
          size={32}
          color={theme.textD}
        />
        <Text style={styles.profileText}>{name}</Text>
      </View>
      <Canvas style={styles.canvas}>
        <NeoReact radius={20} />
      </Canvas>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32,
    zIndex: 1000,
    marginRight: 15,
  },

  profileText: {
    color: theme.textD,
    textAlign: "left",
    zIndex: 1000,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 24,
  },
  profileInfo: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 32,
    // marginBottom: 80,
    zIndex: 1000,
  },
  profileCont: {
    width: "85%",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    position: "relative",
    flexDirection: "row",
    // backgroundColor: "red",
  },
  canvas: {
    height: 75 + 30,
    width: Layout.window.width * 0.85 + 30,
    position: "absolute",
    zIndex: 100,
  },
});
